import Link from 'next/link'
import Head from 'next/head'


//! metatags: nest Link

export default function Home() {
	return (
		<>
			<Head>
				<title>DRichards</title>
				<meta name='description' content='Douglas Richards Blog' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='prose-invert flex-grow flex-col justify-center  dark:bg-gray-700 dark:text-gray-200'>
				<h1 className='text-bold mx-auto my-4 text-center text-4xl font-bold text-gray-50 sm:text-lg'>
					Hello Cosmos!
				</h1>
				<div className='columns-1 gap-6 p-5 sm:columns-2 md:columns-3'>
					<article className='prose dark:text-gray-50'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							animi impedit suscipit architecto, odio inventore nostrum non
							neque dicta. Quam magni accusantium culpa distinctio tempore iure
							accusamus, dolorem nobis odit.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							animi impedit suscipit architecto, odio inventore nostrum non
							neque dicta. Quam magni accusantium culpa distinctio tempore iure
							accusamus, dolorem nobis odit.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							animi impedit suscipit architecto, odio inventore nostrum non
							neque dicta. Quam magni accusantium culpa distinctio tempore iure
							accusamus, dolorem nobis odit.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							animi impedit suscipit architecto, odio inventore nostrum non
							neque dicta. Quam magni accusantium culpa distinctio tempore iure
							accusamus, dolorem nobis odit.
						</p>
					</article>
				</div>
				<div>
					<button className='my-6 rounded bg-gray-500 px-4 py-2 text-xl font-semibold text-gray-50 no-underline dark:bg-gray-200 dark:text-gray-700'>
						<Link href='/bloglist' passHref>
							<a>Blog Listing</a>
						</Link>
					</button>
				</div>
			</div>
		</>
	)
}
