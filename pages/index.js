import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>DRichards</title>
				<meta name='description' content='Douglas Richards Blog' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<article className='container '>
				<h1 className='my-4 text-center text-gray-600'>Hello Cosmos!</h1>
				<div className='gap-6 lg:columns-3 md:columns-2 sm:columns-1'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
				</div>
				<div className='text-center '>
					<Link href='/bloglist' passHref>
						<button className='px-4 py-2 my-6 text-2xl font-semibold text-white no-underline bg-gray-500 rounded'>
							<a>See Blog Listing</a>
						</button>
					</Link>
				</div>
			</article>
		</>
	)
}
