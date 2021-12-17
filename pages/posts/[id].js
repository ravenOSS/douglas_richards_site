import ReactMarkdown from 'react-markdown'
import remarkHtml from 'remark-html'
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
		<div>
			{postData.data.title}
			<br />
			{postData.id}
			<br />
			{postData.data.date}
			<br />
			{postData.content}
			{/* <ReactMarkdown>children={postData.content}</ReactMarkdown> */}
		</div>
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
