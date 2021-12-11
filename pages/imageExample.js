import Image from 'next/image'
import nextjsBlackLogo from '../public/nextjsBlackLogo.svg'

const divStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '50vh',
	width: '50vw',
	backgroundColor: '#fafafa',
}
// export default function imageExample({ allPostsData }) {
// 	return (
// 		<div style={divStyle}>
// 			<Image
// 				src='v1619638150/symmetry_afzqhu.jpg'
// 				width={150}
// 				height={150}
// 				alt='Round Building'
// 			/>
// 		</div>
// 	)
// }

export default function imageExample() {
	return (
		<div style={divStyle}>
			<>
				<p>Built with {` `}</p>
				<Image src={nextjsBlackLogo} alt='Next.js' width='50px' height='50px' />
				{/* <Image
				src='../_next/static/media/nextjsBlackLogo.0101fb34.svg'
				alt='Next.js'
				height={200}
				width={200}
			/> */}
			</>
		</div>
	)
}
