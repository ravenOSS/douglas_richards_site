import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/bloglist.module.css'
import { getPosts } from '../lib/getPosts'

export async function getStaticProps() {
	// Nextjs built-in function
	const allPostsData = getPosts()
	return {
		props: {
			allPostsData,
		},
	}
}
export default function BlogsListing({ allPostsData }) {
	return (
		<article className={styles.main}>
			<h1 className={styles.heading}>Posts</h1>
			<div className={styles.posts}>
				{allPostsData.map(
					({
						id,
						date,
						title,
						thumbnail,
						imagealt,
						heroImage,
						excerpt,
						body,
					}) => (
						<div key={id}>
							<Link href={`/posts/${id}`} passHref>
								<div className={styles.card}>
									<Image
										src={heroImage}
										width={175}
										height={175}
										alt={imagealt}
									/>

									<div className={styles.cardText}>
										<h2>{title}</h2>
										<h3>{excerpt}</h3>
										<h6>{date}</h6>
										<div>{body}</div>
									</div>
								</div>
							</Link>
						</div>
					)
				)}
			</div>
		</article>
	)
}
