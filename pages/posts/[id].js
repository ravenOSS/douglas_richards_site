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
		<div className='  grid  grid-cols-1 grid-rows-3  gap-2   sm:grid-rows-1'>
			<div className='prose mx-auto grid grid-cols-1 items-center bg-gray-200 p-4 dark:prose-invert dark:bg-gray-700'>
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
		</div>
	)
}
