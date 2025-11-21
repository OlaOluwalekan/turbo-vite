import { CSSProperties, ReactNode } from 'react'

export const Typography = ({
  element,
  children,
  style,
  className,
}: {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  children: ReactNode
  style?: CSSProperties
  className?: string
}) => {
  switch (element) {
    case 'h1':
      return (
        <h1
          style={{ fontSize: '32px', fontWeight: 900, ...style }}
          className={className}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          style={{ fontSize: '28px', fontWeight: 800, ...style }}
          className={className}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          style={{ fontSize: '24px', fontWeight: 700, ...style }}
          className={className}
        >
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          style={{ fontSize: '20px', fontWeight: 700, ...style }}
          className={className}
        >
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5
          style={{ fontSize: '18px', fontWeight: 600, ...style }}
          className={className}
        >
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6
          style={{ fontSize: '16px', fontWeight: 600, ...style }}
          className={className}
        >
          {children}
        </h6>
      )
    case 'p':
      return (
        <p
          style={{ fontSize: '16px', fontWeight: 500, ...style }}
          className={className}
        >
          {children}
        </p>
      )
    default:
      return (
        <p
          style={{ fontSize: '16px', fontWeight: 500, ...style }}
          className={className}
        >
          {children}
        </p>
      )
  }
}
