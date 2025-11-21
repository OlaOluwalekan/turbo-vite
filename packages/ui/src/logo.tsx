import { Typography } from './typography'

export const Logo = ({ size = 1 }: { size?: number }) => {
  return (
    <Typography
      element='h2'
      style={{ transform: `scale(${size})`, transformOrigin: 'left top' }}
    >
      <span
        style={{
          backgroundColor: '#a20a05ff',
          padding: '0 5px',
          borderRadius: '5px',
          color: 'white',
        }}
      >
        Turbo
      </span>
      <span style={{ color: '#a20a05ff', marginLeft: '-5px' }}>
        <span
          style={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          R
        </span>
        <span>EPO</span>
      </span>
    </Typography>
  )
}
