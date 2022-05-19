import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div className=' min-h-screen w-screen bg-grey-400 dark:bg-grey-500'>
		<div className='flex flex-col mx-auto min-h-screen max-w-screen-lg items-center justify-center '>
			<Navbar className=' min-h-fit ' />
			<main className='flex-grow flex-col'>{children}</main>
			<Footer className='  min-h-fit' />
		</div>
		</div>
	)
}
