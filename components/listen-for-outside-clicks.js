export default function listenForOutsideClicks(
	listening,
	setListening,
	menuRef,
	setIsBurgerOpen
) {
	return () => {
		if (listening) return
		if (!menuRef.current) return
		setListening(true)
		;[`click`, `touchstart`].forEach((type) => {
			document.addEventListener(`click`, (evt) => {
				const cur = menuRef.current
				const node = evt.target
				if (cur.contains(node)) return
				setIsBurgerOpen(false)
			})
		})
	}
}

// Code from https://github.com/Pomax/react-onclickoutside
