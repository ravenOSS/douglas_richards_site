import { useEffect } from 'react'

export default function useOnClickOutside(menuRef, handler) {
	useEffect(() => {
		const listener = (event) => {
			if (!menuRef.current || menuRef.current.contains(event.target)) {
				return
			}

			handler(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [menuRef, handler])
}

// Code from https://usehooks.com/useOnClickOutside/
