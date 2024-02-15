import { useState, useEffect } from 'react'

const useIsScrollDown = () => {
	const [isScrollDown, setIsScrollDown] = useState(false)
	useEffect(() => {
		let prevScrollTop = 0
		const getScrollDirection = () => {
			const nextScrollTop = window.scrollY || document.documentElement.scrollTop
			if (prevScrollTop < nextScrollTop) {
				setIsScrollDown(true)
			} else {
				setIsScrollDown(false)
			}
			prevScrollTop = nextScrollTop <= 0 ? 0 : nextScrollTop
		}
		window.addEventListener('scroll', getScrollDirection)
		return () => window.removeEventListener('scroll', getScrollDirection)
	}, [])

	return isScrollDown
}

export default useIsScrollDown
