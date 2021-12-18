import ReactMarkdown from 'react-markdown'
import styles from '../../styles/id.module.css'
import Image from 'next/dist/client/image'
import remarkGfm from 'remark-gfm'
import { getAllPostIds, getPostById } from '../../lib/getPosts'

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false,
	}
}

// gray-matter returns frontmatter as 'data' and body as 'content'
// export default function Post({ postData }) {
export default function Post({ postData }) {
	return (
		// <div className={styles.container}>

		<article className={styles.content}>
			<h1>{postData.data.title}</h1>
			<Image
				src={postData.data.thumbnail}
				alt={postData.data.title}
				width='300'
				height='300'
			/>

			<h3>{postData.id}</h3>

			<h4>{postData.data.date}</h4>

			<div>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{postData.content}
				</ReactMarkdown>
			</div>
		</article>
	)
}

export async function getStaticProps({ params }) {
	const postData = getPostById(params.id)
	return {
		props: {
			postData,
		},
	}
}
