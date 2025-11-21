'use client'

import { CSSProperties, ReactNode } from 'react'

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
        backgroundColor: 'green',
        color: 'white',
        padding: '5px 20px',
        borderRadius: '5px',
        ...style,
      }}
      className={className}
      onClick={() => alert(`Hello from your app!`)}
    >
      {children}
    </button>
  )
}
