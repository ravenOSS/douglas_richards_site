import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div className='grid-col-1 mx-auto grid w-screen items-center '>
			<Navbar className=' min-h-fit ' />
			<main className='flex flex-grow'>{children}</main>
			<Footer className='  min-h-fit' />
		</div>
	)
}
