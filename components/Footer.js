import styles from '../styles/footer.module.css'
import Image from 'next/image'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<h2>Built with</h2>
			<Image
				className={styles.logo}
				src='/nextjs-black-logo.svg'
				alt='Next Logo'
				layout='intrinsic'
				height={50}
				width={100}
			/>
		</footer>
	)
}
