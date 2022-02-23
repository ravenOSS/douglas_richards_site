// import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Codeblock from '../../components/Codeblock'
import Image from 'next/dist/client/image'
import { getAllPostIds, getPostById } from '../../lib/getPosts'
import styles from './post.module.css'

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
		<div className='mx-auto  grid  grid-cols-1 place-items-center justify-center p-2 sm:grid-cols-3 md:grid-cols-[minmax(25px,10%)_minmax(300px,_1fr)_minmax(25px,10%)]'>
			<article className='prose prose-sm grid dark:prose-invert sm:col-start-2 sm:col-end-3  '>
				<div className='relative   '>
					<Image
						className='aspect-square rounded-lg border-8 border-gray-500'
						src={postData.data.thumbnail}
						alt={postData.data.title}
						width={324}
						height={324}
						layout='responsive'
						// objectFit='cover'
						// objectPosition={'center'}
						priority
					/>
					<h1
						className={`  absolute bottom-4 right-4 px-2   ${postData.data.postColor}  rounded-md`}
					>
						{postData.data.title}
					</h1>
				</div>
				<h4>{postData.data.date}</h4>
				<ReactMarkdown components={Codeblock} remarkPlugins={[remarkGfm]}>
					{postData.content}
				</ReactMarkdown>
				{/* </section> */}
			</article>
			<div className='md:col-span-1 md:col-start-1'>
				<aside className='prose prose-sm flex flex-col align-text-top  dark:prose-invert'>
					This is the left sidebar
				</aside>
			</div>
			<div className=' flex flex-col items-start md:col-span-1 md:col-start-3'>
				<aside className='prose prose-sm   dark:prose-invert'>
					This is the right sidebar
				</aside>
			</div>
		</div>
	)
}
