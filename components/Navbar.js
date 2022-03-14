import Link from 'next/link'
import MobileMenu from './MobileMenu'

const navItems = [
	{ url: '/', label: 'Home' },
	{ url: '/bloglist', label: 'Blog' },
	{ url: '/profile', label: 'Profile' },
]

export default function Navbar() {
	return (
		<nav className='  w-screen bg-green-400 py-4 '>
			<div className=' flex max-w-5xl   items-center justify-between bg-blue-300 px-6 dark:bg-blue-800'>
				<div className='text-md font-extrabold text-gray-700 dark:text-gray-300 sm:text-lg md:text-2xl'>
					Douglas Richards
				</div>
				<MobileMenu />
				<div className='  hidden py-2 sm:flex'>
					{navItems.map(({ url, label }) => (
						<div key={label} className='w-16 px-1 text-center md:w-24'>
							<Link href={url} passHref>
								<a className='sm:text-md text-sm font-bold text-gray-700 no-underline transition duration-300   hover:text-xl dark:text-gray-300 md:text-lg '>
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
