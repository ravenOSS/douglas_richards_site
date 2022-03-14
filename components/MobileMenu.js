import { MenuIcon } from '@heroicons/react/solid'

function MobileMenu() {
	return (
		<button>
			<MenuIcon className='h-4 w-4 text-gray-700 dark:text-pink-300 sm:hidden' />
		</button>
	)
}

export default MobileMenu
