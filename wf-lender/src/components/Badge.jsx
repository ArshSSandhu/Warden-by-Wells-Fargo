import React from 'react'

export default function Badge({ children, tone = 'default' }) {
  const className = `badge ${tone === 'default' ? '' : `badge-${tone}`}`.trim()
  return <span className={className}>{children}</span>
}
