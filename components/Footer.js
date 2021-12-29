import styles from '../styles/footer.module.css'
import Image from 'next/image'
import nextLogo from '../public/nextjsBlackLogo.svg'

export default function Footer() {
	return (
		<div className={styles.footer}>
			<span className={styles.copyright}>
				© 2021 - {new Date().getFullYear()} Douglas Richards
			</span>
			<span className={styles.credit}>Built with </span>

			<Image
				className={styles.logo}
				src={nextLogo}
				width={75}
				height={45}
				alt='Next.js'
			/>
		</div>
	)
}
