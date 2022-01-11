import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from '../lib/getPosts'

export async function getStaticProps() {
	// Nextjs built-in function
	const allPostsData = getPosts()
	return {
		props: {
			allPostsData,
		},
	}
}
export default function BlogsListing({ allPostsData }) {
	return (
		<div className='grid  grid-cols-[_minmax(300px,_20%)_1fr,_minmax(300px,_20%)] gap-3 p-2 m-12 font-semibold text-gray-800 bg-green-200'>
			<div className='h-full col-start-1 col-end-2 bg-red-100 border border-pink-300 row-span-full'>
				<p className='text-center'>Leftside</p>
			</div>
			<div className='grid col-start-2 col-end-3 p-5 text-4xl font-bold bg-gray-400'>
				<h1>Posts</h1>
			</div>
			<div className='grid col-start-2 col-end-3 gap-3'>
				{allPostsData.map(
					({
						id,
						date,
						title,
						thumbnail,
						imagealt,
						heroImage,
						excerpt,
						body,
					}) => (
						<div key={id}>
							<article>
								<Link href={`/posts/${id}`} passHref>
									<div className='grid items-center content-center grid-cols-2 gap-2 p-5 border-2 border-orange-400 rounded-lg'>
										<div className='p-5 display-block aspect-auto'>
											<Image
												className='rounded-lg aspect-square'
												src={heroImage}
												width={175}
												height={175}
												layout='responsive'
												alt={imagealt}
											/>
										</div>
										<div className='flex flex-col items-center pl-2 m-2'>
											<h2 className='my-2 text-center'>{title}</h2>
											<h3>{excerpt}</h3>
											<h4 className='my-2'>{date}</h4>
										</div>
									</div>
								</Link>
							</article>
						</div>
					)
				)}
			</div>
			<div className='col-start-3 col-end-4 row-start-1 bg-red-100 border border-pink-300 row-span-full'>
				<p>
					This the area for the right sidebar with a statement of interests.
				</p>
				<p>
					Exploring web development, Internet of Things, and their confluence.
				</p>
				<p>
					Exploring web development, Internet of Things, and their convergence.
				</p>
				<p>
					Exploring web development, Internet of Things, and their convergence.
				</p>
			</div>
		</div>
	)
}
