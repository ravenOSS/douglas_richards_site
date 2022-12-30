import Link from 'next/link'
import Head from 'next/head'
import { getPosts } from '../utilities/getPosts'
import PageHeader from '../components/PageHeader'

export async function getStaticProps() {
	// Nextjs built-in function
	const allPostsData = getPosts()
	return {
		props: {
			allPostsData,
		},
	}
}

//! metatags: nest Link

export default function Home({ allPostsData }) {
	return (
		<>
			<Head>
				<title>DRichards</title>
				<meta name='site description' content='Douglas Richards Blog' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex   max-w-7xl flex-grow flex-col items-center justify-center  bg-gray-300  dark:bg-gray-900 '>
				<PageHeader />
				<section>
					<div className='max-width-7xl  mx-auto grid auto-rows-fr grid-cols-1  gap-5 bg-gray-300 px-2 dark:bg-gray-900 sm:grid-cols-2'>
						{allPostsData.map(
							({
								id,
								date,
								// thumbnail,
								title,
								issue,
								solution,
								// imagealt,
								// heroImage,
								// excerpt,
								// postColor,
								// category,
								// content,
							}) => (
								<article
									key={id}
									className='card grid max-h-full  grid-flow-row grid-cols-1   gap-5 rounded-lg border-2 border-orange-600  bg-transparent p-1 text-gray-700 dark:text-gray-200 sm:grid-cols-2 sm:p-2 '
								>
									<div className='col-span-1  col-start-1 mt-1  flex min-h-full flex-col place-items-start'>
										<h4 className=' mb-5 text-xs '>{date}</h4>
										<h2 className=' text-lg font-bold '>{title}</h2>
									</div>

									<div className='  col-span-1 col-start-1  mt-1 flex min-h-full flex-col place-items-start sm:col-span-1 sm:col-start-2'>
										<p className=' mb-5   line-clamp-2'>{issue}</p>
										<p className='   mb-5 line-clamp-2'>{solution}</p>
										<div className='grow'></div>
										<Link
											className=''
											href={`/posts/${id}`}
											passHref
											legacyBehavior
										>
											<button className=' w-35 mt-auto   h-10 bg-transparent  px-2  text-sm font-semibold tracking-wide text-blue-700 no-underline  dark:text-blue-300'>
												Read More
											</button>
										</Link>
									</div>
									{/* </div> */}
								</article>
							)
						)}
					</div>
				</section>
			</div>
		</>
	)
}
