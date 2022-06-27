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
//! Note the backticks to allow JSX for postColor
export default function Post({ postData }) {
	return (
		<div className=' flex w-screen flex-col justify-center  bg-gray-200 p-4 dark:bg-gray-700'>
			<article className='prose max-w-none dark:prose-invert '>
				<h1>{postData.data.title}</h1>
				<h4>{postData.data.date}</h4>
				<ReactMarkdown components={Codeblock} remarkPlugins={[remarkGfm]}>
					{postData.content}
				</ReactMarkdown>
			</article>
		</div>
	)
}
