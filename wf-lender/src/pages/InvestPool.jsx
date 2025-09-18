import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import { simulateInvestPoolDecision, submitBorrowRequest } from '../api/api'

export default function InvestPool() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const borrowRequest = state?.borrowRequest
  const [decision, setDecision] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!borrowRequest) return
    let mounted = true
    simulateInvestPoolDecision(borrowRequest).then((res) => {
      if (mounted) {
        setDecision(res)
        setLoading(false)
      }
    })
    return () => { mounted = false }
  }, [borrowRequest])

  if (!borrowRequest) {
    return (
      <main className="container">
        <Card title="No request">
          <p>No borrow request found. Please start from the Borrow flow.</p>
        </Card>
      </main>
    )
  }

  if (loading) return <main className="container"><p>Checking invest pool...</p></main>

  if (decision.approved) {
    return (
      <main className="container">
        <Card title="Instant Invest Pool Approved">
          <p>Approved limit: ${decision.limit}</p>
          <p>APR: {decision.apr}%</p>
          <p>Instant access powered by diversified, low-volatility strategies and real-time underwriting.</p>
          <div>
            <button onClick={() => navigate('/success', { state: { offer: { amount: decision.limit, apr: decision.apr, type: 'invest_pool' } } })}>Accept Offer</button>
            <button onClick={() => {
              // fallback to community offers
              submitBorrowRequest(borrowRequest).then((offers) => navigate('/matches', { state: { borrowRequest, offers } }))
            }}>See community offers</button>
          </div>
        </Card>
      </main>
    )
  }

  return (
    <main className="container">
      <Card title="Instant approval unavailable">
        <p>We can’t approve instantly, but we found community offers.</p>
        <div>
          <button onClick={() => submitBorrowRequest(borrowRequest).then((offers) => navigate('/matches', { state: { borrowRequest, offers } }))}>See community offers</button>
        </div>
      </Card>
    </main>
  )
}
