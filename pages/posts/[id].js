import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Codeblock from '../../components/codeblock'
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
		<div className='flex flex-col items-center justify-center max-w-6xl p-4 bg-gray-300 md:gap-3 '>
			<h1 className='text-2xl font-bold bg-gray-400 my-7'>
				{postData.data.title}
			</h1>
			<h4>{postData.data.date}</h4>

			<Image
				className='rounded-lg drop-shadow-2xl aspect-square'
				src={postData.data.thumbnail}
				alt={postData.data.title}
				width='175'
				height='175'
				layout='responsive'
			/>
			<div>
				<div className='py-2 mx-2 prose prose-lg bg-green-100'>
					<ReactMarkdown components={Codeblock} remarkPlugins={[remarkGfm]}>
						{postData.content}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	)
}
{
	/* <article>
<div className='grid max-w-screen-lg grid-cols-1 md:gap-3 p-2  bg-gray-200 md:grid-cols-[minmax(30px,_8%)_minmax(300px,_1fr),_minmax(200px,_30%)] '>
	<div className='flex flex-col items-center content-center p-1 md:col-start-2 md:col-end-3'>
		<h1 className='my-7'>{postData.data.title}</h1>
		<h4>{postData.data.date}</h4>

		<Image
			className='rounded-lg drop-shadow-2xl aspect-square'
			src={postData.data.thumbnail}
			alt={postData.data.title}
			width='300'
			height='300'
			layout='responsive'
		/>
		<div>
			<h3 className='my-4 ml-0 '>{postData.id}</h3>

			<div className='prose prose-lg '>
				<ReactMarkdown
					components={Codeblock}
					remarkPlugins={[remarkGfm]}
				>
					{postData.content}
				</ReactMarkdown>
			</div>
		</div>
	</div>
</div>
</article> */
}
