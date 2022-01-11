import Image from 'next/image'
import nextLogo from '../public/nextjsBlackLogo.svg'

export default function Footer() {
	return (
		<div className='flex items-center content-end min-w-full pt-4 pb-4 pl-12 pr-12 bg-gray-300 border-t-4 border-orange-400'>
			<span className='mr-auto text-sm font-semibold text-gray-600'>
				© 2021 - {new Date().getFullYear()} Douglas Richards
			</span>
			<span className='text-sm font-semibold text-gray-600 mr-3.5'>
				Built with
			</span>

			<Image
				// className='pr-6'
				src={nextLogo}
				width={75}
				height={45}
				alt='Next.js'
			/>
		</div>
	)
}
