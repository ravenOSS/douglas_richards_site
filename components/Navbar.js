import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<h2>Douglas Richards</h2>
			</div>
			<Link href='/'>
				<a>About</a>
			</Link>
			<Link href='/bloglist'>
				<a>Blogs</a>
			</Link>
			<Link href='/profile'>
				<a>Author Profile</a>
			</Link>
		</nav>
	)
}

export default Navbar
