import { Logo } from '@repo/ui/logo'
import { Typography } from '@repo/ui/typography'

const App = () => {
  return (
    <div>
      <header className='w-[90%] max-w-[1200px] mx-auto py-2 border-b border-b-gray-300 flex justify-between items-center'>
        <div className='flex'>
          <Logo size={1} />
          <Typography element='h5' className='ml-[-5px] z-10'>
            Docs
          </Typography>
        </div>
      </header>

      <main className='w-[90%] max-w-[1200px] mx-auto'>
        <Typography element='h2'>Turbo Docs</Typography>
      </main>
    </div>
  )
}

export default App
