import Image from 'next/image'
import nextLogo from '../public/nextjsBlackLogo.svg'
import { staticLoader } from '../lib/staticLoader'

export default function Footer() {
	return (
		<footer className='flex w-full justify-center border-t-2 border-orange-400 bg-blue-300 px-12 py-4 '>
			<div className=' flex w-4/5 max-w-7xl flex-col items-center justify-around bg-green-200 sm:flex-row'>
				<div className='text-xs font-semibold text-gray-600'>
					© 2018 - {new Date().getFullYear()} Douglas Richards
				</div>
				<div className='flex items-center justify-center'>
					<div className='mr-2 text-xs font-semibold text-gray-600'>
						Built with
					</div>
					<Image
						loader={staticLoader}
						// src='/nextjsBlackLogo.svg'
						src={nextLogo}
						width={45}
						height={27}
						alt='Next logo'
					/>
				</div>
			</div>
		</footer>
	)
}
