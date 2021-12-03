import styles from '../styles/main.module.css'

export default function Main() {
	return (
		<main className={styles.layout.main}>
			{children}
			<p>This is main</p>
		</main>
	)
}
