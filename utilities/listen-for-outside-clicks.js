import { useEffect } from 'react'

export default function useOnClickOutside(menuRef, handler) {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!menuRef.current || menuRef.current.contains(event.target)) {
				return
			}

			handler(event)
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('touchstart', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [menuRef, handler])
}

// Code from https://usehooks.com/useOnClickOutside/
