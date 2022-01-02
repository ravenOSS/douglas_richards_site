import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [router])

	return (
		<div className='not-found'>
			<h1>Sorry...</h1>
			<h2>What you&apos;re looking for ain&apos;t here :(</h2>
			<p>
				Going back to the{' '}
				<Link href='/'>
					<a>Homepage</a>
				</Link>{' '}
				is 3 seconds...
			</p>
		</div>
	)
}

export default NotFound
