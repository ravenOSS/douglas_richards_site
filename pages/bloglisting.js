import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/BlogListing.module.css'
import { getSortedPostsData } from '../lib/getSortedPosts' // note import syntax

export async function getStaticProps() {
	// Nextjs built-in function
	const allPostsData = await getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}
export default function BlogsListing({ allPostsData }) {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<h1>Blog Posts</h1>
				<div className={styles.grid}>
					<ul>
						{allPostsData.map(
							({ id, date, title, thumbnail, heroImage, excerpt, body }) => (
								<li key={id}>
									<Link href={`/posts/${id}`}>
										<div className={styles.card}>
											<Image
												src={heroImage}
												width={150}
												height={150}
												alt='Round Building'
											/>

											<div className={styles.cardText}>
												<h2>{title}</h2>
												<h3>{excerpt}</h3>
												<h4>{date}</h4>
												<div>{body}</div>
											</div>
										</div>
									</Link>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}
