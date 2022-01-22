import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='self-start min-w-full px-12 py-4 m-0 bg-gray-200 '>
			<div className='flex flex-col items-center bg-green-100 md:justify-around md:max-width-6xl md:flex-row'>
				<div>
					<h2 className='text-2xl font-extrabold text-gray-600'>
						Douglas Richards
					</h2>
				</div>
				<div className='flex flex-col md:flex-row'>
					<div className='px-1 text-center w-36 '>
						<Link href='/'>
							<a className='text-lg font-bold text-gray-600 no-underline transition duration-300 hover:text-xl '>
								About
							</a>
						</Link>
					</div>
					<div className='px-1 text-center w-36 '>
						<Link href='/bloglist'>
							<a className='text-lg font-bold text-gray-600 no-underline transition duration-300 hover:text-xl'>
								Blog
							</a>
						</Link>
					</div>
					<div className='px-1 text-center w-36'>
						<Link href='/profile'>
							<a className='text-lg font-bold text-gray-600 no-underline transition duration-300 hover:text-xl'>
								Author Profile
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
