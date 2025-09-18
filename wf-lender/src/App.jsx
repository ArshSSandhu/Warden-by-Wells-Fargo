import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './styles/theme.css'
import Home from './pages/Home'
import Borrow from './pages/Borrow'
import Lend from './pages/Lend'
import MatchResults from './pages/MatchResults'
import InvestPool from './pages/InvestPool'
import Success from './pages/Success'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/matches" element={<MatchResults />} />
        <Route path="/invest" element={<InvestPool />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff8', padding: '6px', textAlign: 'center', fontSize: '12px' }}>
        Demo concept: figures simulated; not financial advice; fees/terms for illustration only.
      </footer>
    </BrowserRouter>
  )
}
