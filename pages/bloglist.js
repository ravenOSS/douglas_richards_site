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

// export default function BlogList({ allPostsData }) {
export default function BlogList({ allPostsData }) {
	return (
		<div className='max-width-xl  mx-auto grid grid-cols-1 items-center justify-center  gap-4 bg-gray-200 px-2  dark:bg-gray-700 md:grid-cols-2'>
			{allPostsData.map(
				({
					id,
					date,
					// thumbnail,
					title,
					// imagealt,
					// heroImage,
					// excerpt,
					// postColor,
					// category,
					// content,
				}) => (
					<article
						key={id}
						className='my-2 rounded-lg border-2 border-orange-400 '
					>
						<div className='flex items-center justify-center text-gray-700 dark:text-gray-200 '>
							<div>
								<h4 className='my-2 text-xs '>{date}</h4>
								<h2 className='my-2 text-center text-lg font-bold'>{title}</h2>
							</div>
							<div className=''>
								{/* <div
									className={`${postColor} relative h-8 w-11/12 rounded-lg`}
								></div> */}

								<button className='w-25 m-1 h-5 rounded-sm p-1 px-2 text-sm dark:bg-gray-200 dark:text-gray-700'>
									<Link className='' href={`/posts/${id}`} passHref>
										Read More
									</Link>
								</button>
							</div>
						</div>
					</article>
				)
			)}
		</div>
	)
}
