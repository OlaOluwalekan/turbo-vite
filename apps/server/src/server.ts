import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { add } from '@repo/math/add'
import { subtract } from '@repo/math/subtract'
import { prisma } from './lib/prisma.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
  res.status(200).send('Home Again and Again')
})

app.post('/calculate', (req, res) => {
  const { operation, numbers } = req.body
  let result: number | null = null

  if (operation === '+') {
    result = add(numbers.first, numbers.second)
  } else if (operation === '-') {
    result = subtract(numbers.first, numbers.second)
  } else {
    result = null
  }

  res.status(200).json({ result })
})

app.get('/users/all', async (_, res) => {
  const users = await prisma.user.findMany()

  res.status(200).json({ users })
})

app.post('/users/create', async (req, res) => {
  const user = await prisma.user.create({
    data: { ...req.body },
  })

  res.status(200).json({ user })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
