import Image from 'next/image'
import nextLogo from '../public/nextjsBlackLogo.svg'
import { staticLoader } from '../utilities/staticLoader'

export default function Footer() {
	return (
		<footer className='dark:bg-grey-700 mt-5 flex w-full justify-center border-t-2 border-orange-400 px-12 py-4'>
			<div className=' dark:bg-grey-700 flex w-4/5 max-w-7xl flex-col items-center justify-around sm:flex-row'>
				<div className='text-xs font-semibold dark:text-gray-200'>
					© 2018 - {new Date().getFullYear()} Douglas Richards
				</div>
				<div className='flex items-center justify-center'>
					<div className='mr-2 text-xs font-semibold dark:text-gray-200'>
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
