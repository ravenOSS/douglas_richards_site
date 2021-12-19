import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/blogListing.module.css'
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
		<div className={styles.container}>
			{/* <div className={styles.main}> */}
			<h1>Blog Posts</h1>
			<div className={styles.grid}>
				<ul>
					{allPostsData.map(
						({
							id,
							date,
							title,
							thumbnail,
							thumbAlt,
							heroImage,
							excerpt,
							body,
						}) => (
							<li key={id}>
								<Link href={`/posts/${id}`} passHref>
									<div className={styles.card}>
										<Image
											src={heroImage}
											width={175}
											height={175}
											alt='Round Building'
										/>

										<div className={styles.cardText}>
											<h2>{title}</h2>
											<h3>{excerpt}</h3>
											<h6>{date}</h6>
											<div>{body}</div>
										</div>
									</div>
								</Link>
							</li>
						)
					)}
				</ul>
				{/* </div> */}
			</div>
		</div>
	)
}
