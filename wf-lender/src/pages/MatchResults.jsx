import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { fmt, pct } from '../utils/money'

export default function MatchResults() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [offers, setOffers] = useState(state?.offers || [])
  const [borrowRequest] = useState(state?.borrowRequest)
  const [sortByCategoryFirst, setSortByCategoryFirst] = useState(true)

  useEffect(() => {
    if (!state?.offers) return
    setOffers(state.offers)
  }, [state])

  const sorted = offers.slice().sort((a, b) => {
    if (sortByCategoryFirst && borrowRequest) {
      const aMatch = a.categories.includes(borrowRequest.purpose) ? 1 : 0
      const bMatch = b.categories.includes(borrowRequest.purpose) ? 1 : 0
      if (aMatch !== bMatch) return bMatch - aMatch
    }
    return b.apr - a.apr ? a.apr - b.apr : b.score - a.score
  })

  return (
    <main className="container">
      <h1>Match Results</h1>
      <label>
        <input type="checkbox" checked={sortByCategoryFirst} onChange={(e) => setSortByCategoryFirst(e.target.checked)} /> Show purpose-aligned lenders first
      </label>

      <div className="grid">
    {sorted.map((offer) => (
          <Card key={offer.id} title={offer.lenderName} footer={<div>${offer.monthlyPayment}/mo • ${offer.totalCost} total</div>}>
            <div>
              {offer.categories.map((c) => <Badge key={c}>{c}</Badge>)}
            </div>
      <p>APR: {pct(offer.apr)}</p>
      <p>Facilitation fee: {fmt(offer.facilitationFee)} ({offer.feePolicy === 'lender_pays' ? 'Lender pays' : 'Borrower pays'})</p>
            <p>{offer.sameDay ? 'Same-day available' : 'Standard processing'}</p>
      <p className="contrast">{offer.explanation}</p>
      <details>
              <summary>View terms</summary>
              <pre>Amount: ${offer.amount}
APR: {offer.apr}%
Months: {offer.months}
Score: {offer.score}</pre>
            </details>
            <div>
              <button onClick={() => navigate('/success', { state: { offer } })}>Choose this offer</button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}
