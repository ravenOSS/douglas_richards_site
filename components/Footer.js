import styles from '../styles/footer.module.css'
import Image from 'next/image'
import nextLogo from '../public/nextjs-black-logo.svg'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Built with</p>
			<Image
				// className={styles.logo}
				src={nextLogo}
				alt='Next Logo'
				// layout='intrinsic'
				// height={30}
				// width={60}
			/>
		</footer>
	)
}
