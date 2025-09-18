import seedLenders from '../data/seed'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export async function fetchLenders() {
  await delay(200)
  return seedLenders
}

function scoreLender(lender, borrowRequest) {
  let score = 0
  const { amount, purpose, urgency } = borrowRequest

  // category match
  if (lender.categories.includes(purpose)) score += 50

  // amount within range
  if (amount <= lender.maxAmount && amount >= lender.minAmount) score += 30

  // urgency same-day
  if (urgency === 'today' && lender.sameDay) score += 10

  // lower apr is better (normalized)
  score += Math.max(0, 20 - lender.apr)

  // risk tolerance: prefer lower risk for larger amounts
  if (amount > 20000) {
    score += Math.max(0, 6 - lender.riskTolerance) * 2
  } else {
    score += lender.riskTolerance
  }

  return Math.round(score)
}

export async function matchLenders(borrowRequest) {
  await delay(400)
  const lenders = seedLenders.map((l) => ({ ...l }))
  const scored = lenders.map((l) => ({ lender: l, score: scoreLender(l, borrowRequest) }))
  scored.sort((a, b) => b.score - a.score)
  return scored
}

function monthlyPayment(amount, apr, months = 12) {
  const monthlyRate = apr / 100 / 12
  if (monthlyRate === 0) return amount / months
  const pow = Math.pow(1 + monthlyRate, months)
  return (amount * monthlyRate * pow) / (pow - 1)
}

export async function submitBorrowRequest(borrowRequest) {
  await delay(500)
  const matches = await matchLenders(borrowRequest)
  const top = matches.slice(0, 3)
  const offers = top.map(({ lender, score }, idx) => {
    const apr = Math.max(1.5, lender.apr + idx * 0.5) // small variation
    const amount = Math.min(borrowRequest.amount, lender.maxAmount)
    const months = 12
    const monthly = monthlyPayment(amount, apr, months)
    const total = Math.round(monthly * months)
    const facilitationFee = Math.round((lender.facilitationFeePct / 100) * amount)
    return {
      id: `${lender.id}-${borrowRequest.id || 'req'}-${idx}`,
      lenderId: lender.id,
      lenderName: lender.name,
      categories: lender.categories,
      amount,
      apr,
      months,
      monthlyPayment: Math.round(monthly),
      totalCost: total,
      facilitationFee,
      feePolicy: lender.feePolicy,
      sameDay: lender.sameDay,
      score,
    }
  })
  return offers
}

export async function simulateInvestPoolDecision(borrowRequest) {
  await delay(300)
  // deterministic rule: approve if amount <= income * 1.5 and purpose allowed
  const allowed = ['medical', 'farming', 'auto']
  const income = Number(borrowRequest.income || 0)
  const approved = income > 0 && borrowRequest.amount <= income * 1.5 && allowed.includes(borrowRequest.purpose)
  if (approved) {
    // give a limit and apr based on risk
    const limit = Math.round(Math.min(borrowRequest.amount, income * 1.5))
    const apr = 3.5 // demo-friendly
    return { approved: true, limit, apr, reason: 'Eligible for instant invest pool' }
  }
  // otherwise deny with gentle reason
  const limit = Math.round(Math.min(income * 0.8 || 0, 5000))
  return { approved: false, limit, apr: 0, reason: 'Does not meet instant pooling criteria' }
}
