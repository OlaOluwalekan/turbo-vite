import { Button } from '@repo/ui/button'
import { Logo } from '@repo/ui/logo'
import { Typography } from '@repo/ui/typography'
import Calc from './Calc'
import Words from './Words'

const App = () => {
  return (
    <div className=''>
      <header className='w-[90%] max-w-[1200px] mx-auto py-2 border-b border-b-gray-300 flex justify-between items-center'>
        <Logo size={1} />

        <nav>
          <Button className='bg-red-400'>Docs</Button>
        </nav>
      </header>

      <main className='w-[90%] max-w-[1200px] mx-auto'>
        <Typography element='h2'>Turbo Web</Typography>

        <Calc />

        <Words />
      </main>
    </div>
  )
}

export default App
