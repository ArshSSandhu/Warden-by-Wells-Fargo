import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import { simulateInvestPoolDecision, submitBorrowRequest } from '../api/api'

const purposes = ['medical', 'auto', 'housing', 'tuition', 'farming']

export default function Borrow() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    purpose: 'medical',
    amount: '1000',
    urgency: 'flexible',
    income: '3000',
    employment: 'employed',
    consent: false,
    path: 'invest',
  })
  const est = useMemo(() => {
    const aprBand = form.purpose === 'medical' ? '3-6%' : form.purpose === 'tuition' ? '2-5%' : '4-9%'
    const amountNum = Number(form.amount || 0)
    return { amount: amountNum, aprBand, feeNote: form.path === 'invest' ? 'Invest pool may apply' : 'Community facilitation fee' }
  }, [form])

  function update(changes) {
    setForm((s) => ({ ...s, ...changes }))
  }

  async function onSubmit(e) {
    e && e.preventDefault()
    const borrowRequest = {
      ...form,
      id: `req-${Date.now()}`,
      amount: Number(form.amount || 0),
      income: Number(form.income || 0),
    }
    if (form.path === 'invest') {
      // navigate to invest with state
      navigate('/invest', { state: { borrowRequest } })
      return
    }
    // community path
    const offers = await submitBorrowRequest(borrowRequest)
    navigate('/matches', { state: { borrowRequest, offers } })
  }

  return (
    <main className="container grid">
      <section>
        <h1>Borrow — Step {step} of 3</h1>

        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
            <label>
              Purpose
              <select value={form.purpose} onChange={(e) => update({ purpose: e.target.value })}>
                {purposes.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </label>
            <label>
              Amount
              <input type="number" value={form.amount} onChange={(e) => update({ amount: e.target.value.replace(/^0+(?=\d)/, '') })} />
            </label>
            <label>
              Urgency
              <select value={form.urgency} onChange={(e) => update({ urgency: e.target.value })}>
                <option value="today">Today</option>
                <option value="this_week">This week</option>
                <option value="flexible">Flexible</option>
              </select>
            </label>
            <div>
              <button type="button" onClick={() => setStep(1)} disabled>Back</button>
              <button type="submit">Continue</button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
            <label>
              Monthly Income
              <input type="number" value={form.income} onChange={(e) => update({ income: e.target.value.replace(/^0+(?=\d)/, '') })} />
            </label>
            <label>
              Employment status
              <select value={form.employment} onChange={(e) => update({ employment: e.target.value })}>
                <option value="employed">Employed</option>
                <option value="self">Self-employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </label>
            <label>
              <input type="checkbox" checked={form.consent} onChange={(e) => update({ consent: e.target.checked })} /> I consent to a demo credit check
            </label>
            <div>
              <button type="button" onClick={() => setStep(1)}>Back</button>
              <button type="submit">Continue</button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={onSubmit}>
            <fieldset>
              <legend>Choose path</legend>
              <label>
                <input type="radio" name="path" value="invest" checked={form.path === 'invest'} onChange={(e) => update({ path: e.target.value })} /> Instant Invest Pool
              </label>
              <label>
                <input type="radio" name="path" value="community" checked={form.path === 'community'} onChange={(e) => update({ path: e.target.value })} /> Community Match
              </label>
            </fieldset>
            <div>
              <button type="button" onClick={() => setStep(2)}>Back</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </section>

      <aside>
        <Card title="Estimated terms">
          <p>Amount: ${est.amount}</p>
          <p>APR band: {est.aprBand}</p>
          <p>{est.feeNote}</p>
        </Card>
      </aside>
    </main>
  )
}
