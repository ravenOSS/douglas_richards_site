export default function Profile() {
	return (
		<div className='prose mx-auto grid grid-flow-row grid-cols-1 gap-4 bg-gray-200  p-4 dark:prose-invert dark:bg-gray-700 sm:grid-cols-2'>
			<h1>About</h1>
			<h2>
				Exploring the confluence of web technologies and the IoT (Internet of
				Things).
			</h2>

			<div className='flex   max-w-7xl flex-grow flex-col items-center justify-center  bg-gray-300  dark:bg-gray-700 '>
				<h1 className='text-bold mx-auto my-4 text-center text-4xl font-bold  dark:text-orange-400 sm:text-2xl'>
					Web technologies, IoT, and their confluence
				</h1>
			</div>
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
					Mobile app development has been greatly simplified with the advent of
					React Native so I'll be exploring that too.
					<p>
						Collecting data from sensors and devices obviously requires some
						type of storage unless truly transient. I'll mostly use MongoDB but
						also other document type DBs such as DynamoDB or key:value stores
						such as Redis. IoT data collection is typically time based so time
						series DBs will be explored.
					</p>
					<p>
						There's no point in collecting data without seeing them. Therefore,
						some posts will delve into data extraction and visualization.
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
		</div>
	)
}
