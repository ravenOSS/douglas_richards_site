import Layout from '../components/Layout'
import Sidebar_left from '../components/sidebar_left'
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
				<Sidebar_left className={styles.side_left} />
				<div className={styles.overview}>Overview</div>
				<Sidebar_right className={styles.side_right} />
				<div className={styles.content}>
					<blog className='blog-post'>blog 1</blog>
					<blog className='blog-post'>blog 2</blog>
					<blog className='blog-post'>blog 3</blog>
					<blog className='blog-post'>blog 4</blog>
					<blog className='blog-post'>blog 5</blog>
					<blog className='blog-post'>blog 6</blog>
					<blog className='blog-post'>blog 7</blog>
					<blog className='blog-post'>blog 8</blog>
					<blog className='blog-post'>blog 9</blog>
					<blog className='blog-post'>blog 10</blog>
					<blog className='blog-post'>blog 11</blog>
					<blog className='blog-post'>blog 12</blog>
					<blog className='blog-post'>blog 13</blog>
					<blog className='blog-post'>blog 14</blog>
					<blog className='blog-post'>blog 15</blog>
					<blog className='blog-post'>blog 16</blog>
					<blog className='blog-post'>blog 17</blog>
					<blog className='blog-post'>blog 18</blog>
					<blog className='blog-post'>blog 19</blog>
					<blog className='blog-post'>blog 20</blog>
					<blog className='blog-post'>blog 21</blog>
					<blog className='blog-post'>blog 22</blog>
					<blog className='blog-post'>blog 23</blog>
					<blog className='blog-post'>blog 24</blog>
					<blog className='blog-post'>blog 25</blog>
					<blog className='blog-post'>blog 26</blog>
					<blog className='blog-post'>blog 27</blog>
					<blog className='blog-post'>blog 28</blog>
				</div>
			</div>
		</>
	)
}
