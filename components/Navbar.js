import { useState } from 'react'
import Link from 'next/link'
// import MobileMenu from './MobileMenu'
import { MenuIcon } from '@heroicons/react/solid'

const navItems = [
	{ url: '/', label: 'Home' },
	{ url: '/bloglist', label: 'Blog' },
	{ url: '/profile', label: 'Profile' },
]

//! Wrap the burger in button to allow for click to open
//! NO use a select dropdown for mobile
export default function Navbar() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	return (
		<nav className='  flex w-full justify-center bg-green-400 py-4'>
			<div className=' relative  flex  w-4/5 max-w-7xl items-center justify-between bg-blue-300 px-1 dark:bg-blue-800'>
				<div className='text-sm font-extrabold text-gray-700 dark:text-gray-200 sm:text-lg md:text-2xl'>
					Douglas Richards
				</div>
				<div className='absolute top-0.5 right-1 flex flex-col items-end'>
					<button onClick={() => setIsBurgerOpen((prev) => !prev)}>
						<MenuIcon className='open-mobile-menu h-4 w-4 text-gray-700 dark:text-gray-200 sm:hidden' />
					</button>
					{isBurgerOpen && (
						<div className='z-10 flex flex-col py-2 sm:hidden'>
							{navItems.map(({ url, label }) => (
								<div key={label} className='w-16 px-1 text-center md:w-24'>
									<Link
										href={url}
										passHref
										onClick={() => setIsBurgerOpen((prev) => !prev)}
									>
										<a className='sm:text-md text-sm font-bold text-gray-700 no-underline  dark:text-gray-300 md:text-lg '>
											{label}
										</a>
									</Link>
								</div>
							))}
						</div>
					)}
				</div>

				<div className='desktop-menu hidden py-2 sm:flex'>
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
