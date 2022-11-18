import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
import useOnClickOutside from '../utilities/listen-for-outside-clicks'

const navItems = [
	{ url: '/', label: 'Blog' },
	{ url: '/profile', label: 'Profile' },
	{ url: '/connect', label: 'Connect' },
	{ url: '/bio', label: 'Bio' },
]

//TODO: add X to close navbar
//TODO: increas padding on close icon to 48 x 48 px

export default function Navbar() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	const menuRef = useRef(null)
	useOnClickOutside(menuRef, () => {
		setIsBurgerOpen(false)
	})
	return (
		<nav className='  dark:bg-grey-700 flex w-full justify-center py-4'>
			<div className=' bg-grey-300  dark:bg-grey-800 relative flex w-full max-w-7xl items-center justify-between px-10'>
				<div className=' text-lg font-bold text-gray-700 dark:text-gray-200 sm:text-xl md:text-2xl'>
					douglas richards
				</div>

				<div className=' absolute top-0.5 right-1 z-20 flex flex-col items-end justify-center'>
					{isBurgerOpen ? (
						<div ref={menuRef}>
							<div className='flex flex-col items-end bg-gray-100 py-0   text-gray-200 dark:bg-gray-500 sm:hidden'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									onClick={() => setIsBurgerOpen(false)}
									className='h-8 w-8 sm:hidden'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>

								{navItems.map(({ url, label }) => (
									<div key={label} className='w-fit  py-2 px-2'>
										<Link
											href={url}
											passHref
											onClick={() => setIsBurgerOpen(false)}
											className='  font-normal text-gray-700 no-underline dark:text-gray-200  sm:text-base md:text-lg '
										>
											{label}
										</Link>
									</div>
								))}
							</div>
						</div>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							onClick={() => setIsBurgerOpen(true)}
							className='h-6 w-6 text-gray-700 dark:text-gray-200 sm:hidden'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					)}
				</div>
				<div className='desktop-menu hidden items-center py-2 sm:flex'>
					{navItems.map(({ url, label }) => (
						<div key={label} className='w-16  px-1 md:w-24'>
							<Link
								href={url}
								passHref
								className='font-extralight  text-gray-700 no-underline transition duration-300 hover:text-lg   dark:text-gray-200 sm:text-base md:text-lg '
							>
								{label}
							</Link>
						</div>
					))}
				</div>
			</div>
		</nav>
	)
}
