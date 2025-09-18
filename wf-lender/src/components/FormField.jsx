import React from 'react'

export default function FormField({
  id,
  label,
  hint,
  error,
  type = 'text',
  children,
  ...rest
}) {
  const base = (
    <input id={id} name={id} type={type} {...rest} />
  )

  return (
    <label htmlFor={id} className="form-group">
      <span>{label}</span>
      {type === 'select' ? (
        <select id={id} name={id} {...rest}>{children}</select>
      ) : (
        base
      )}
      {hint && <small className="contrast">{hint}</small>}
      {error && <small className="error">{error}</small>}
    </label>
  )
}
