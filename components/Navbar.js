import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='flex flex-wrap items-center content-end min-w-full py-4 mx-0 bg-gray-300 border-b-4 border-orange-400'>
			<div className='ml-10 mr-auto text-2xl font-extrabold text-gray-600 '>
				<h2>Douglas Richards</h2>
			</div>
			<span className='w-48 bg-gray-500 '>
				<Link href='/'>
					<a className='mr-0 text-lg font-bold text-gray-600 no-underline hover:text-xl'>
						About
					</a>
				</Link>
			</span>
			<span className='w-48 bg-gray-500 '>
				<Link href='/bloglist'>
					<a className='mr-0 text-lg font-bold text-gray-600 no-underline hover:text-xl'>
						Blogs
					</a>
				</Link>
			</span>
			<span className='w-48 bg-gray-500 '>
				<Link href='/profile'>
					<a className='mr-0 text-lg font-bold text-gray-600 no-underline hover:text-xl'>
						Author Profile
					</a>
				</Link>
			</span>
		</nav>
	)
}

export default Navbar
