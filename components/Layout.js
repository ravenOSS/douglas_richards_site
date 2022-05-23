import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div className=' bg-grey-400 dark:bg-grey-500 min-h-screen w-screen'>
			<div className='mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center '>
				<Navbar className=' min-h-fit ' />
				<main className='grow flex-col'>{children}</main>
				<Footer className='  min-h-fit' />
			</div>
		</div>
	)
}
