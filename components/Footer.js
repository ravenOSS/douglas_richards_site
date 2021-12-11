import styles from '../styles/footer.module.css'
import Image from 'next/image'
import nextjsBlackLogo from '../public/nextjsBlackLogo.svg'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Built with </p>
			{/* <p className={styles.logo}> */}
			<Image
				className={styles.logo}
				src={nextjsBlackLogo}
				alt='Next.js'
				width={80}
				height={80}
			/>
		</footer>
	)
}
