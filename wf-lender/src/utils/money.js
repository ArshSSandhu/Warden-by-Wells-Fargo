export function fmt(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export function pct(n) {
  return `${Number(n).toFixed(1)}%`
}

export function monthlyPayment(principal, apr, months = 12) {
  const monthlyRate = apr / 100 / 12
  if (!monthlyRate) return principal / months
  const pow = Math.pow(1 + monthlyRate, months)
  return (principal * monthlyRate * pow) / (pow - 1)
}

export default { fmt, pct, monthlyPayment }
