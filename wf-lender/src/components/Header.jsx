import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ background: 'white', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 0' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src="/wells-pargo.png" alt="Wells Fargo" style={{ height: 40 }} />
          <span style={{ fontWeight: 700, color: 'var(--wf-dark)' }}>Warden</span>
        </a>
        <nav>
          <ul style={{ display: 'flex', gap: 16, listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/borrow">Borrow</Link></li>
            <li><Link to="/lend">Lend</Link></li>
            <li><Link to="/invest">Invest</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
