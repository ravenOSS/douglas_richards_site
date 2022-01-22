import Image from 'next/image'
import Link from 'next/link'
import Pagetitle from '../components/pagetitle'
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
		// Page layout
		<div className='flex flex-col items-center justify-center flex-grow sm:flex-row min-w-min'>
			{/* <div className='flex flex-col justify-center min-h-full p-1 my-2 bg-red-100 border border-pink-300 '> */}
			<div className='hidden min-h-full p-1 my-2 bg-red-100 border border-pink-300 sm:block'>
				<p className='text-center break-words'>Social</p>
			</div>
			<div className='grid items-center justify-center p-3 py-6 mx-auto bg-green-200 grid-cols-[minmax(400px,_1fr)] sm:gap-3 sm:grid-cols-2 '>
				{allPostsData.map(
					({
						id,
						date,
						thumbnail,
						title,
						imagealt,
						heroImage,
						excerpt,
						body,
					}) => (
						<article
							key={id}
							className='border-2 border-orange-400 rounded-lg '
						>
							<Link href={`/posts/${id}`} passHref>
								{/* <div className='grid items-center justify-center grid-cols-2 gap-2 p-5 border-2 border-orange-400 rounded-lg'> */}
								<div className='flex flex-col '>
									{/* <div className='p-5 display-block '> */}
									<Image
										className='rounded-lg '
										src={heroImage}
										width={175}
										height={175}
										layout='responsive'
										alt={imagealt}
									/>
									{/* </div> */}
									<div className='flex flex-col items-center pl-2 m-2'>
										<h2 className='my-2 text-xl font-bold text-center'>
											{title}
										</h2>
										<h3 className='text-lg font-normal text-center'>
											{excerpt}
										</h3>
										<h4 className='my-2 text-sm'>{date}</h4>
									</div>
								</div>
							</Link>
						</article>
					)
				)}
			</div>
			<div className='flex flex-col flex-1 min-h-full p-2 my-2 bg-red-100 border border-pink-300 '>
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
			</div>
		</div>
	)
}
