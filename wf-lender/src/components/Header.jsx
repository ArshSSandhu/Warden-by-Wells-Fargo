import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="container" style={{ paddingTop: '12px' }}>
      <nav className="nav">
        <a href="/" className="contrast" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/wells-pargo.png" alt="Wells Fargo" style={{ height: 36 }} />
          <span style={{ fontWeight: 700 }}>Warden</span>
        </a>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/borrow">Borrow</Link></li>
          <li><Link to="/lend">Lend</Link></li>
          <li><Link to="/invest">Invest</Link></li>
        </ul>
      </nav>
    </header>
  )
}
