import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
  const nav = useNavigate()
  return (
    <main className="container grid">
      <h1>Warden by Wells Fargo</h1>
      <div className="grid">
        <Card title="Instant Invest Pool">
          <p>Bank-backed diversified strategies pre-fund emergency liquidity with instant underwriting.</p>
        </Card>
        <Card title="Community Match">
          <p>Purpose-aligned lenders offering competitive APRs and human trust.</p>
        </Card>
        <Card title="Why this helps Wells Fargo">
          <p>Trust, loyalty, brand lift, new fee revenue, and risk-aware diversification.</p>
        </Card>
      </div>
      <div>
        <button onClick={() => nav('/borrow')}>Start Borrow Flow</button>
      </div>
    </main>
  )
}
