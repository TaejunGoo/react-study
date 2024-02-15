import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export function PC({ children }: { children: React.ReactNode }): React.ReactNode {
	const [isPc, setIsPc] = useState<boolean>(false)
	const pc = useMediaQuery({ query: '(min-width:768px)' })

	useEffect(() => {
		setIsPc(pc)
	}, [pc])

	return isPc && children
}

export function DESKTOP({ children }: { children: React.ReactNode }): React.ReactNode {
	const [isDesktop, setIsDesktop] = useState<boolean>(false)
	const desktop = useMediaQuery({ query: '(min-width:1024px)' })

	useEffect(() => {
		setIsDesktop(desktop)
	}, [desktop])

	return isDesktop && children
}

export function TABLET({ children }: { children: React.ReactNode }): React.ReactNode {
	const [isTab, setIsTab] = useState<boolean>(false)
	const tablet = useMediaQuery({ query: '(min-width:768px) and (max-width:1023px)' })

	useEffect(() => {
		setIsTab(tablet)
	}, [tablet])

	return isTab && children
}

export function MOBILE({ children }: { children: React.ReactNode }): React.ReactNode {
	const [isMobile, setIsMobile] = useState<boolean>(false)
	const mobile = useMediaQuery({ query: '(max-width:767px)' })

	useEffect(() => {
		setIsMobile(mobile)
	}, [mobile])

	return isMobile && children
}
