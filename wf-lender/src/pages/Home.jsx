import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
  const nav = useNavigate()
  return (
    <div>
      <div className="wf-banner">
        <img src="/wells-pargo.png" alt="Wells Fargo" />
        <h2>Fast, Fair, and Purpose-Aligned Lending</h2>
      </div>

      <div className="container">
        <section style={{ padding: '2rem 0' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Warden — quick credit when it matters</h1>
          <p style={{ textAlign: 'center', color: '#555' }}>Pick a path: instant access via the bank's Invest Pool or purpose-aligned community lenders.</p>
        </section>

        <section className="home-cards">
          <Card title="Instant Invest Pool">
            <p>Pre-funded pools underwrite quickly for eligible customers — low-latency access when time matters most.</p>
          </Card>
          <Card title="Community Match">
            <p>Purpose-aligned lenders compete transparently on APR, availability, and facilitation fees.</p>
          </Card>
          <Card title="Why this helps Wells Fargo">
            <p>Drive customer satisfaction, new revenue, and responsible access to capital.</p>
          </Card>
        </section>

        <div className="hero-cta" style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => nav('/borrow')}>Start Borrow Flow</button>
        </div>
      </div>
    </div>
  )
}
