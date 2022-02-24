import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		// <div className=' grid grid-cols-[minmax(360px,_1fr)]    w-full min-h-screen  bg-orange-500 dark:bg-orange-900 '>
		<div className=' grid min-h-screen    w-full grid-cols-[minmax(360px,_1fr)] bg-gray-100 dark:bg-gray-700'>
			<Navbar className='row-start-1 row-end-2 min-h-fit ' />
			<main className='row-start-2 row-end-3'>{children}</main>
			<Footer className='row-start-3 row-end-4  min-h-fit' />
		</div>
	)
}
// scrollbar scrollbar-thumb-green-900 scrollbar-track-blue-900
