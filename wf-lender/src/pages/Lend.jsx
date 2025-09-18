import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import store from '../data/store'
import Card from '../components/Card'
import Badge from '../components/Badge'

const categories = ['medical', 'auto', 'housing', 'tuition', 'farming']

export default function Lend() {
  const [form, setForm] = useState({
    name: '',
    categories: [],
    minAmount: 100,
    maxAmount: 10000,
    apr: 5.0,
    sameDay: false,
    feePolicy: 'lender_pays',
    facilitationFeePct: 1.0,
    riskTolerance: 3,
  })
  const [toast, setToast] = useState('')

  function update(changes) {
    setForm((s) => ({ ...s, ...changes }))
  }

  function toggleCategory(cat) {
    setForm((s) => ({ ...s, categories: s.categories.includes(cat) ? s.categories.filter(c => c !== cat) : [...s.categories, cat] }))
  }

  function onSubmit(e) {
    e.preventDefault()
    const lender = { id: uuidv4(), ...form }
    store.addLender(lender)
    setToast("Thanks! You're live for matches.")
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <main className="container grid">
      <section>
        <h1>Lender Onboarding</h1>
        <form onSubmit={onSubmit}>
          <label>
            Name
            <input value={form.name} onChange={(e) => update({ name: e.target.value })} />
          </label>

          <fieldset>
            <legend>Categories</legend>
            {categories.map((c) => (
              <label key={c}>
                <input type="checkbox" checked={form.categories.includes(c)} onChange={() => toggleCategory(c)} /> {c}
              </label>
            ))}
          </fieldset>

          <label>
            Min amount
            <input type="number" value={form.minAmount} onChange={(e) => update({ minAmount: Number(e.target.value) })} />
          </label>
          <label>
            Max amount
            <input type="number" value={form.maxAmount} onChange={(e) => update({ maxAmount: Number(e.target.value) })} />
          </label>
          <label>
            APR
            <input type="number" step="0.1" value={form.apr} onChange={(e) => update({ apr: Number(e.target.value) })} />
          </label>
          <label>
            Same day available
            <input type="checkbox" checked={form.sameDay} onChange={(e) => update({ sameDay: e.target.checked })} />
          </label>
          <label>
            Fee policy
            <select value={form.feePolicy} onChange={(e) => update({ feePolicy: e.target.value })}>
              <option value="lender_pays">Lender pays</option>
              <option value="borrower_pays">Borrower pays</option>
            </select>
          </label>
          <label>
            Facilitation fee %
            <input type="number" step="0.1" value={form.facilitationFeePct} onChange={(e) => update({ facilitationFeePct: Number(e.target.value) })} />
          </label>
          <label>
            Risk tolerance
            <input type="range" min="1" max="5" value={form.riskTolerance} onChange={(e) => update({ riskTolerance: Number(e.target.value) })} /> {form.riskTolerance}
          </label>

          <div>
            <button type="submit">Go live</button>
          </div>
        </form>
        {toast && <div className="toast">{toast}</div>}
      </section>

      <aside>
        <Card title="Preview — how borrowers see you">
          <h4>{form.name || 'Your name'}</h4>
          <div>{form.categories.map((c) => <Badge key={c}>{c}</Badge>)}</div>
          <p>Range: ${form.minAmount} - ${form.maxAmount}</p>
          <p>APR: {form.apr}% • {form.sameDay ? 'Same-day' : 'Standard'}</p>
        </Card>
      </aside>
    </main>
  )
}
