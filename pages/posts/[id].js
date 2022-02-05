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
	const boxBG = postData.data.titlebackground
	console.log(postData.data.titlebackground)
	console.log(boxBG)
	return (
		<article className='flex flex-col items-center bg-gray-300 dark:bg-gray-700'>
			<div
				className={`w-20 h-20 ${postData.data.titlebackground} border border-blue-800 text-pink-600`}
			>
				A box
			</div>
			<div className='grid items-center justify-center max-w-screen-lg p-0 mx-0 bg-gray-400 col-1 scroll-m-0'>
				<div className='mx-2'>
					<Image
						className='object-fill rounded-lg drop-shadow-2xl aspect-square'
						src={postData.data.thumbnail}
						alt={postData.data.title}
						width={300}
						height={300}
						layout='responsive'
						priority='true'
					/>
				</div>

				<h1 className='text-2xl font-bold text-center bg-gray-600 dark:text-gray-300'>
					{postData.data.title}
				</h1>
				<h3
					className={`mt-2 ml-2 text-sm font-bold text-gray-700 dark:text-gray-200 ${postData.data.titlebackground}`}
				>
					{postData.data.date}
				</h3>
				{/* <div
					className={`w-20 h-20 ${postData.data.titlebackground} border border-blue-800 text-pink-600`}
          >
					A box
				</div> */}
				<h4
					className={`w-fit h-20 ${postData.data.titlebackground} border border-blue-800 text-zinc-300`}
				>
					{postData.data.title}
				</h4>
				<div className='p-2 mx-0 my-2 prose prose-lg bg-green-200 sm:p-3 '>
					<ReactMarkdown components={Codeblock} remarkPlugins={[remarkGfm]}>
						{postData.content}
					</ReactMarkdown>
				</div>
			</div>
		</article>
	)
}
