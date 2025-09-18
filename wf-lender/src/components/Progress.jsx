import React from 'react'

export default function Progress({ value = 0, max = 100 }) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)))
  return (
    <div className="progress" aria-valuemin="0" aria-valuemax={max} aria-valuenow={value}>
      <div className="progress-bar" style={{ width: `${pct}%` }} />
    </div>
  )
}
