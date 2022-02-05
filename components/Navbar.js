import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <nav className='flex flex-col items-center justify-center w-full py-4 bg-green-400 columns-1 '>
      <div className='flex items-center justify-end max-w-sm px-4 bg-blue-300 dark:bg-blue-800 sm:flex-row min-w-fit'>
        <div className='mr-auto text-xl font-extrabold text-gray-700 dark:text-gray-300 md:text-2xl'>
          Douglas Richards
        </div>
        <div className='flex flex-col sm:flex-row'>
          <MobileMenu />
          <div className='hidden px-1 text-center sm:inline w-36 '>
            <Link href='/'>
              <a className='text-base font-bold text-gray-700 no-underline transition duration-300 dark:text-gray-300 md:text-lg hover:text-xl '>
                About
              </a>
            </Link>
          </div>
          <div className='hidden px-1 text-center sm:inline w-36 '>
            <Link href='/bloglist'>
              <a className='text-base font-bold text-gray-700 no-underline transition duration-300 dark:text-gray-300 md:text-lg hover:text-xl'>
                Blog
              </a>
            </Link>
          </div>
          <div className='hidden px-1 text-center sm:inline w-36'>
            <Link href='/profile'>
              <a className='text-base font-bold text-gray-700 no-underline transition duration-300 cursor-pointer dark:text-gray-300 md:text-lg hover:text-xl'>
                Author Profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
