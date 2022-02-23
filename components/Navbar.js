import Link from 'next/link'
import MobileMenu from './MobileMenu'

const navItems = [
	{ url: '/', label: 'Home' },
	{ url: '/bloglist', label: 'Blog' },
	{ url: '/profile', label: 'Author Profile' },
]

export default function Navbar() {
	return (
		<nav className='  w-screen bg-green-400 py-4 '>
			<div className='mx-auto flex max-w-5xl flex-row  items-center justify-end bg-blue-300 px-6 dark:bg-blue-800'>
				<div className='mr-auto text-lg font-extrabold text-gray-700 dark:text-gray-300 md:text-2xl'>
					Douglas Richards
				</div>
				<MobileMenu className='sm:hidden ' />
				<div className=' hidden sm:visible'>
					{navItems.map(({ url, label }) => (
						<div key={label} className='w-16 px-1 text-center sm:w-36'>
							<Link href={url}>
								<a className='md:text-md text-sm font-bold text-gray-700 no-underline transition  duration-300 hover:text-xl dark:text-gray-300 '>
									{label}
								</a>
							</Link>
						</div>
					))}
				</div>
			</div>
		</nav>
	)
}
