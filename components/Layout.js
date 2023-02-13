import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div className='   grid min-h-screen w-screen grid-cols-1 grid-rows-[auto,_1fr,_auto] items-center dark:bg-gray-900'>
			<Navbar className=' row-start-1 row-end-2 w-full' />
			<main className='row-start-2 row-end-3  w-full justify-center '>
				{children}
			</main>
			<Footer className='row-start-3 row-end-4 w-full' />
		</div>
	)
}
