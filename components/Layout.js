import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/layout.module.css'

export default function Layout(props) {
	return (
		<layout className={styles.wrapper}>
			<Navbar className={styles.layoutNavbar} />
			<main className={styles.mainWrapper}>{props.children}</main>
			<Footer className={styles.layoutFooter} />
		</layout>
	)
}
