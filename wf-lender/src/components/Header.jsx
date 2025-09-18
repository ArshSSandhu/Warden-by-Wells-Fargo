import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="container">
      <nav className="nav">
        <a className="contrast" href="/">Warden</a>
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
