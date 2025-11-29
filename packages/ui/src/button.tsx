import '../dist/output.css'

import { type CSSProperties, type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export const Button = ({ children, className, style }: ButtonProps) => {
  return (
    <button
      style={{
        cursor: 'pointer',
        padding: '5px 20px',
        borderRadius: '5px',
        ...style,
      }}
      className={`bg-primary text-white ${className}`}
      onClick={() => alert(`Hello from your app!`)}
    >
      {children}
    </button>
  )
}
