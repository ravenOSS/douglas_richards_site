import Link from 'next/link'
import Layout from '../components/Layout'
import Sidebar_left from '../components/Sidebar_left'
import Sidebar_right from '../components/Sidebar_right'

import Head from 'next/head'
import styles from '../styles/home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>DRichards</title>
				<meta name='description' content='Douglas Richards Blog' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.main}>
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
        
				<Link href='/ninjas/'>
					<a className={styles.btn}>See Blogs Listing</a>
				</Link>
			</div>
		</>
	)
}
