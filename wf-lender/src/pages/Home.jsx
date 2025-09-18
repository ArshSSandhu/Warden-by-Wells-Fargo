import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
  const nav = useNavigate()
  return (
    <main>
      <div className="wf-banner">
        <img src="/wells-pargo.png" alt="Wells Fargo" />
        <h2>Fast, Fair, and Purpose-Aligned Lending</h2>
      </div>

      <main className="container grid">
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
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={() => nav('/borrow')}>Start Borrow Flow</button>
        </div>
      </main>
    </main>
  )
}
