import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='flex flex-col items-center content-end min-w-full px-10 py-4 m-0 md:flex-row '>
			<div className=' md:mr-auto'>
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
							Blogs
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
		</nav>
	)
}

export default Navbar
