import React from 'react'

export default function Card({ title, children, footer }) {
  return (
    <article className="card">
      {title && <h3>{title}</h3>}
      <div>{children}</div>
      {footer && <footer className="card-footer">{footer}</footer>}
    </article>
  )
}
