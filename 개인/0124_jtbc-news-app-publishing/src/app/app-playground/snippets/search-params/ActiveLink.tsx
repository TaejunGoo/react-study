'use client'

import { usePathname } from 'next/navigation'
import { SelectableButton } from '@/app/_components/SelectableButton'

export function ActiveLink({
	isActive,
	searchParams,
	children,
}: {
	isActive: boolean
	searchParams: string
	children: React.ReactNode
}) {
	const pathname = usePathname()

	return (
		<SelectableButton active={isActive} link href={`${pathname}?${searchParams}`}>
			{children}
		</SelectableButton>
	)
}
