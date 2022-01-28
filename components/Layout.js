import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<div className='flex flex-col w-screen min-h-screen '>
			<Navbar />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	)
}
