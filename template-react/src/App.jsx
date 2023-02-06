import { useState } from 'react'
import reactLogo from './assets/react.svg'

export default function App() {
  const [count, setCount] = useState(0)

	return (
		<div className='flex justify-center items-center h-screen text-center'>
			<div className='min-w-[320px]'>
				<div className='flex justify-center'>
					<a href='https://vitejs.dev' className='h-auto w-auto p-6' target='_blank'>
						<img src='/vite.svg' className='w-auto h-24 object-contain' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' className='h-auto w-auto p-6' target='_blank'>
						<img src={reactLogo} className='w-auto h-24 object-contain' alt='React logo' />
					</a>
				</div>
				<h1 className='text-5xl text-white font-bold my-8'>Vite + React</h1>
				<div className='p-8'>
					<button onClick={() => setCount((count) => count + 1)} className='rounded-lg border border-transparent py-2 px-5 bg-gray-900 text-white hover:border-purple-700'>
						count is {count}
					</button>
					<p className='my-4 text-white'>
						Edit <code className='text-xs'>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p className='my-4 text-gray-500'>
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</div>
  )
}
