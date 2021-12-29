import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/home.module.css'

export default function Home() {
	return (
		<>
			<div className={styles.main}>
				<Head>
					<title>DRichards</title>
					<meta name='description' content='Douglas Richards Blog' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<div className={styles.overview}>
					<h1 className={styles.title}>Homepage</h1>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
						impedit suscipit architecto, odio inventore nostrum non neque dicta.
						Quam magni accusantium culpa distinctio tempore iure accusamus,
						dolorem nobis odit.
					</p>

					<Link href='/bloglist'>
						<a>See Blog Listing</a>
					</Link>
				</div>
			</div>
		</>
	)
}
