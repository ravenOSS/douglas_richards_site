import styles from '../styles/footer.module.css'
import Image from 'next/image'
import nextjsBlackLogo from '../public/nextjsBlackLogo.svg'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Built with </p>
			<p className={styles.logo}>
				<Image
					src={'nextjsBlackLogo.svg'}
					width={20}
					height={20}
					alt='Next.js'
				/>
				<img src='/nextjsBlackLogo.svg' alt='Next.js Logo' />
			</p>
		</footer>
	)
}
