import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
	return (
		<>
			<div className={styles.container}>
				<Navbar />
				<Main>{children}</Main>
				<Footer />
			</div>
		</>
	)
}
