// import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Codeblock from '../../components/Codeblock'
import Image from 'next/dist/client/image'
import { getAllPostIds, getPostById } from '../../lib/getPosts'

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const postData = getPostById(params.id)
	return {
		props: {
			postData,
		},
	}
}

// gray-matter returns frontmatter as 'data' and body as 'content'
export default function Post({ postData }) {
	return (
		<div className='  grid  grid-cols-1 grid-rows-3  gap-2  sm:grid-cols-[minmax(25px,10%)_minmax(300px,_1fr)_minmax(25px,10%)] sm:grid-rows-1'>
			<div className='grid-col-1 prose mx-auto grid items-center bg-gray-200 p-4 dark:prose-invert dark:bg-gray-700'>
				<div className='relative'>
					<Image
						className='aspect-square rounded-lg border-8 border-gray-500'
						src={postData.data.thumbnail}
						alt={postData.data.title}
						width={600}
						height={600}
						layout='responsive'
						priority
					/>
					<figcaption
						className={`absolute bottom-2 right-1 ${postData.data.postColor} rounded-md p-1 text-xs  dark:prose-invert`}
					>
						{postData.data.title}
					</figcaption>
				</div>
				<h4>{postData.data.date}</h4>
				<ReactMarkdown components={Codeblock} remarkPlugins={[remarkGfm]}>
					{postData.content}
				</ReactMarkdown>
			</div>
			<div className=' row-start-2 p-2 sm:col-span-1 sm:col-start-1 sm:row-start-1'>
				<div className='flex min-h-fit flex-col'>
					<aside className='prose prose-sm   dark:prose-invert'>
						<p>This is the left sidebar</p>
					</aside>
				</div>
			</div>
			<div className=' row-start-3 p-2 sm:col-span-1 sm:col-start-3 sm:row-start-1'>
				<div className='flex min-h-fit flex-col'>
					<aside className='prose prose-sm   dark:prose-invert'>
						<p>This is the right sidebar</p>
					</aside>
				</div>
			</div>
		</div>
	)
}
