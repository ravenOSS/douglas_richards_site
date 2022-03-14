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
		<div className='max-width-lg prose mx-auto grid grid-cols-1 items-center justify-center  gap-4 bg-gray-200 px-2 dark:prose-invert dark:bg-gray-700 md:grid-cols-2'>
			{allPostsData.map(
				({
					id,
					date,
					thumbnail,
					title,
					// imagealt,
					heroImage,
					excerpt,
					postColor,
				}) => (
					<article
						key={id}
						className='my-2 rounded-lg border-2 border-orange-400 '
					>
						<Link href={`/posts/${id}`} passHref>
							<div className='grid grid-cols-1 items-center justify-center gap-2 rounded-lg border-2 border-orange-400 p-5 md:grid-cols-2'>
								{/* <div className='flex flex-col '> */}
								<div className='relative'>
									<Image
										className=' aspect-square rounded-lg '
										src={thumbnail}
										alt={title}
										width={600}
										height={600}
										layout='responsive'
										priority
									/>
									<figcaption
										className={`absolute bottom-2 right-1 ${postColor} rounded-md p-1 text-xs  dark:prose-invert`}
									>
										{title}
									</figcaption>
								</div>
								<div className='m-2 flex flex-col items-center pl-2'>
									<h2 className='my-2 text-center text-xl font-bold'>
										{title}
									</h2>
									<h3 className='text-center text-lg font-normal'>{excerpt}</h3>
									<h4 className='my-2 text-sm'>{date}</h4>
								</div>
							</div>
						</Link>
					</article>
				)
			)}
			{/* </div> */}
			{/* <div className='flex flex-col flex-1 min-h-full p-2 my-2 bg-red-100 border border-pink-300 '>
				<p className='break-words'>
					This the area for the right sidebar with a statement of interests.
				</p>

				<p className='break-words'>
					Exploring web development, Internet of Things, and their confluence.
				</p>

				<p className='break-words'>
					Exploring web development, Internet of Things, and their convergence.
				</p>
				<p className='break-words'>
					Exploring web development, Internet of Things, and their convergence.
				</p>
			</div> */}
			{/* <div className='flex flex-col justify-center min-h-full p-1 my-2 bg-red-100 border border-pink-300 '> */}
			{/* <div className='hidden min-h-full p-1 my-2 bg-red-100 border border-pink-300 sm:block'>
				<p className='text-center break-words'>Social</p>
			</div> */}
			{/* <div className='grid items-center justify-center p-3 py-6 mx-auto bg-green-200 grid-cols-[minmax(400px,_1fr)] sm:gap-3 sm:grid-cols-2 '> */}
		</div>
	)
}
