import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div className='flex flex-col items-center justify-center w-screen min-h-screen mx-auto bg-gray-400 dark:bg-gray-800 '>
			<Navbar />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	)
}
