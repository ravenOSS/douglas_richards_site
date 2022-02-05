import Image from 'next/image'
import nextLogo from '../public/nextjsBlackLogo.svg'
import { staticLoader } from '../lib/staticLoader'

export default function Footer() {
  return (
    <footer className='min-w-full px-12 py-4 bg-gray-300 border-t-2 border-orange-400 justify-self-end'>
      <div className='flex flex-col items-center bg-green-200 md:justify-around max-width-md md:flex-row'>
        <div className='text-sm font-semibold text-gray-600'>
          <small>© 2018 - {new Date().getFullYear()} Douglas Richards</small>
        </div>
        <div className='flex items-center justify-center'>
          <div className='text-sm font-semibold text-gray-600 mr-3.5'>
            Built with
          </div>
          <Image
            loader={staticLoader}
            // src='/nextjsBlackLogo.svg'
            src={nextLogo}
            width={75}
            height={45}
            alt='Next logo'
          />
        </div>
      </div>
    </footer>
  )
}
