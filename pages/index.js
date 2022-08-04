import Link from 'next/link'
import Head from 'next/head'
// import { getPosts } from '../lib/getPosts'
import { getPosts } from '../utilities/getPosts'

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
			<div className='flex   max-w-7xl flex-grow flex-col items-center justify-center  bg-gray-300  dark:bg-gray-700 '>
				<h1 className='text-bold mx-auto my-4 text-center text-4xl font-bold  dark:text-orange-400 sm:text-2xl'>
					A blog about Web technologies, IoT, and their confluence
				</h1>
				<section className='columns-1 gap-6 p-5 sm:columns-2 '>
					<article className='bg-grey-200 prose text-black dark:text-gray-200'>
						<p>
							Concise posts about web technologies, software development, IoT
							(Internet of Things) and melding them together. Since the audience
							is fellow developers, I will avoid replicating official docs. You
							will surely understand the basics of installing modules and using
							them and I don't want to waste your time on that.
						</p>
						<p>
							Mostly working with React.js and derivative frameworks such as
							Next.js on the frontend and Node.js on the backend. However,
							there'll be some non-framework related posts too.
						</p>
						Mobile app development has been greatly simplified with the advent
						of React Native so I'll be exploring that too.
						<p>
							Collecting data from sensors and devices obviously requires some
							type of storage unless truly transient. I'll mostly use MongoDB
							but other document type DBs such as DynamoDB or key:value stores
							such as Redis. IoT data collection is typically time based so time
							series DBs will be explored.
						</p>
						<p>
							There's no point in collecting data without seeing them.
							Therefore, some posts will delve into data extraction and
							visualization.
						</p>
						<div className='p'>
							Some posts are content for classes for which I am an instructor.
						</div>
						<p>
							Since I have nowhere else to post, I'll be throwing some random
							stuff in here.
						</p>
					</article>
				</section>
				<section>
					<div className='max-width-7xl  mx-auto grid auto-rows-fr grid-cols-1  gap-5 bg-gray-300 px-2 dark:bg-gray-700 sm:grid-cols-2'>
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
									className='card grid max-h-full  grid-flow-row grid-cols-1   gap-5 rounded-lg border-2 border-orange-400  bg-transparent p-1 text-gray-700 dark:text-gray-200 sm:grid-cols-2 sm:p-2 '
								>
									<div className='col-span-1  col-start-1 mt-1  flex min-h-full flex-col place-items-start'>
										<h4 className=' mb-5 text-xs '>{date}</h4>
										<h2 className=' text-lg font-bold '>{title}</h2>
									</div>

									<div className='  col-span-1 col-start-1  mt-1 flex min-h-full flex-col place-items-start sm:col-span-1 sm:col-start-2'>
										<p className=' mb-5   line-clamp-2'>{issue}</p>
										<p className='   mb-5 line-clamp-2'>{solution}</p>
										<div className='grow'></div>
										<Link className='' href={`/posts/${id}`} passHref>
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
