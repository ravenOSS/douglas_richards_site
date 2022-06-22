import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		// <div className=' min-h-screen w-screen bg-blue-400 dark:bg-gray-700 dark:text-gray-200'>
		<div className=' w-screen bg-blue-400 dark:bg-gray-700 dark:text-gray-200'>
			<div className='mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center '>
				<Navbar className=' min-h-fit ' />
				<main className='flex grow flex-col'>{children}</main>
				<Footer className='  min-h-fit' />
			</div>
		</div>
	)
}
