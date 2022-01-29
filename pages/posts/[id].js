import Head from 'next/head'
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
		<div className='grid items-center justify-center p-0 mx-0 bg-gray-300 dark:bg-gray-600 col-1 scroll-m-0 max-w-screen-2xl'>
			<div className='my-2 sm:mx-4'>
				<Image
					className='object-fill rounded-lg drop-shadow-2xl aspect-square'
					src={postData.data.thumbnail}
					alt={postData.data.title}
					width='100'
					height='100'
					layout='responsive'
				/>
				<h1 className='object-left-bottom text-2xl font-bold text-center bg-0 dark:text-gray-300'>
					{postData.data.title}
				</h1>
			</div>
			<h3 className='self-start mt-2 ml-2 text-sm font-bold text-gray-700 dark:text-gray-200'>
				{postData.data.date}
			</h3>

			<div className='p-2 mx-0 my-2 prose prose-lg bg-green-200 sm:p-2 sm:mx-4'>
				<ReactMarkdown components={Codeblock} remarkPlugins={[remarkGfm]}>
					{postData.content}
				</ReactMarkdown>
			</div>
		</div>
	)
}
