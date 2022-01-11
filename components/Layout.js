import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div className='flex flex-col items-center justify-center min-w-full min-h-screen p-0 mx-0 '>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
