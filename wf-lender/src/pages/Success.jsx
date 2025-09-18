import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card'
import { fmt } from '../utils/money'

export default function Success() {
  const { state } = useLocation()
  const offer = state?.offer

  if (!offer) {
    return <main className="container"><Card title="Done">Thank you — no offer details found.</Card></main>
  }

  // invest pool flow
  if (offer.type === 'invest_pool') {
    return (
      <main className="container">
        <Card title="Funds approved">
          <p>Approved amount: {fmt(offer.amount)}</p>
          <p>APR: {offer.apr}%</p>
          <p>Funds available in minutes.</p>
          <p>You can prepay anytime without penalties.</p>
          <button onClick={() => window.print()}>Download receipt (PDF)</button>
        </Card>
      </main>
    )
  }

  // community flow
  return (
    <main className="container">
      <Card title="Offer accepted">
        <h3>{offer.lenderName}</h3>
        <p>Amount: {fmt(offer.amount)}</p>
        <p>APR: {offer.apr}%</p>
        <h4>Cost breakdown</h4>
        <ul>
          <li>Principal: {fmt(offer.amount)}</li>
          <li>Interest (approx): {fmt(offer.totalCost - offer.amount)}</li>
          <li>Facilitation fee: {fmt(offer.facilitationFee)}</li>
        </ul>
        <p>Total repayment: {fmt(offer.totalCost + offer.facilitationFee)}</p>
        <p>You can prepay anytime without penalties.</p>
        <button onClick={() => window.print()}>Download receipt (PDF)</button>
      </Card>
    </main>
  )
}
