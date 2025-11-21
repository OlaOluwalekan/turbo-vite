import { useState } from 'react'
import { add } from '@repo/math/add'
import { subtract } from '@repo/math/subtract'
import { Typography } from '@repo/ui/typography'

const Calc = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState<Number | null>(null)

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-2'>
        <div className='flex flex-col'>
          <label htmlFor='num1' className='text-sm'>
            Number 1:
          </label>
          <input
            type='number'
            name='num1'
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className='p-2 border-b-2 focus:outline-none focus:border focus:border-gray-500 focus:rounded-md transition-all'
          />
        </div>

        <button
          className='text-3xl cursor-pointer'
          onClick={() => {
            if (operator === '+') {
              setOperator('-')
            } else {
              setOperator('+')
            }
          }}
        >
          {operator}
        </button>

        <div className='flex flex-col'>
          <label htmlFor='num2' className='text-sm'>
            Number 2:
          </label>
          <input
            type='number'
            name='num2'
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className='p-2 border-b-2 focus:outline-none focus:border focus:border-gray-500 focus:rounded-md transition-all'
          />
        </div>

        <button
          onClick={() => {
            let result: number
            if (operator === '+') {
              result = add(Number(num1), Number(num2))
            } else {
              result = subtract(Number(num1), Number(num2))
            }
            setResult(result)
          }}
          className='cursor-pointer bg-green-600 text-white py-2 px-5 md:py-1'
        >
          Add
        </button>
      </div>

      {result && (
        <Typography element='h1' style={{ margin: 'auto', fontSize: '100px' }}>
          {String(result)}
        </Typography>
      )}
    </div>
  )
}

export default Calc
