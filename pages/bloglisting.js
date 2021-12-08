import Image from 'next/image'
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
							({ id, date, title, thumbnail, heroImage, excerpt }) => (
								<li key={id}>
									<div className={styles.card}>
										<Image
											src='drumroll_wy6xwb.jpg'
											width={150}
											height={150}
											alt='Oil pump jack'
										/>

										<div className={styles.cardText}>
											<h5>{date}</h5>
											<h3>{title}</h3>
											<h4>{excerpt}</h4>
										</div>
									</div>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}
