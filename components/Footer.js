import styles from '../styles/footer.module.css'
import Image from 'next/image'
// import nextjsBlackLogo from '/nextjsBlackLogo.svg'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Built with</p>
			<Image
				// className={styles.logo}
				// src='http://localhost:3000/nextjsBlackLogo.svg'
				src='drumroll_wy6xwb.jpg'
				alt='Next Logo'
				height={30}
				width={60}
			/>
		</footer>
	)
}
