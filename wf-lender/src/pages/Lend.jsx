import React from 'react'

export default function Lend() {
  return (
    <main className="container">
      <h1>Lend</h1>
      <p>Offer capital — placeholder inputs for the demo.</p>
      <form>
        <label htmlFor="amount">Amount to lend</label>
        <input id="amount" name="amount" type="number" placeholder="5000" />

        <label htmlFor="risk">Risk preference</label>
        <select id="risk" name="risk">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit">Offer</button>
      </form>
    </main>
  )
}
