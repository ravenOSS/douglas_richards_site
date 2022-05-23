import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
import listenForOutsideClicks from './listen-for-outside-clicks'

const navItems = [
	{ url: '/', label: 'Home' },
	{ url: '/bloglist', label: 'Blog' },
	{ url: '/profile', label: 'Profile' },
]

export default function Navbar() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	const menuRef = useRef(null)
	const [listening, setListening] = useState(false)
	const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen)

	useEffect(
		listenForOutsideClicks(listening, setListening, menuRef, setIsBurgerOpen)
	)

	return (
		<nav
			ref={menuRef}
			className='  flex w-full justify-center bg-green-400 py-4'
		>
			<div className=' relative  flex  w-4/5 max-w-7xl items-center justify-between bg-blue-300 px-1 dark:bg-blue-800'>
				<div className='text-lg font-extrabold text-gray-700 dark:text-gray-200 sm:text-lg md:text-2xl'>
					Douglas Richards
				</div>
				<div
					onClick={toggleBurger}
					className=' absolute top-0.5 right-1 flex flex-col items-end'
				>
					<MenuIcon className='h-5 w-5 text-gray-700 dark:text-gray-200 sm:hidden' />
					{isBurgerOpen && (
						<div className='z-10 flex flex-col py-2 dark:bg-gray-500 sm:hidden'>
							{navItems.map(({ url, label }) => (
								<div key={label} className='w-fit px-4 py-2 text-center'>
									<Link href={url} passHref>
										<a className=' text-lg font-bold text-gray-700 no-underline dark:text-gray-300  sm:text-base md:text-lg '>
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
								<a className='font-bold  text-gray-700 no-underline transition duration-300 hover:text-lg   dark:text-gray-300 sm:text-base md:text-lg '>
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
