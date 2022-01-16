import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen p-0 mx-0 max-width-1280 '>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
