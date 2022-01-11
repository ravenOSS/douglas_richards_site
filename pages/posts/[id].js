import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Codeblock from '../../components/Codeblock'
// import styles from '../../styles/id.module.css'
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
		// <div className='max-w-screen-lg'>
		<>
			<Head>
				<title>{postData.data.title}</title>
			</Head>
			<div className='grid grid-cols-[_minmax(200px,_20%)_1fr,_minmax(200px,_20%)]  gap-2 p-2 mt-12 text-gray-800 bg-yellow-400'>
				<article className='grid content-center col-start-2 col-end-3 '>
					<h1 className='my-7'>{postData.data.title}</h1>

					<Image
						className='rounded-lg drop-shadow-2xl aspect-square'
						src={postData.data.thumbnail}
						alt={postData.data.title}
						width='300'
						height='300'
						layout='responsive'
					/>

					<div>
						<br />
						<h3 className='my-4 ml-0 '>{postData.id}</h3>
						<br />
						<h4>{postData.data.date}</h4>
						<br />
						<div className='prose'>
							<ReactMarkdown components={Codeblock} remarkPlugins={[remarkGfm]}>
								{postData.content}
							</ReactMarkdown>
						</div>
					</div>
				</article>
			</div>
		</>
	)
}
