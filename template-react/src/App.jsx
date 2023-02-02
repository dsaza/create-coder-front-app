import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen flex-col justify-center items-center'>
      <div className='flex items-center gap-8 mb-8'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='./vite.svg' className='w-[80px]' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='w-[80px]' alt='React logo' />
        </a>
      </div>
      <h1 className='font-bold text-2xl mb-8'>Vite + React</h1>
      <div className='mb-8 text-center'>
        <button className='bg-sky-600 text-white font-semibold px-5 py-2 rounded-md' onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p className='mt-4 text-gray-500'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='text-gray-700'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
