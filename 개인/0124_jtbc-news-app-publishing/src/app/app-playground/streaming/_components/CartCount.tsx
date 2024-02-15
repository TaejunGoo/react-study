'use client'

import { useCartCount } from '@/app/app-playground/streaming/_components/CartCountContext'
import { Box } from '@/shared/components/demo/Box.styled'

export function CartCount() {
	const [count] = useCartCount()
	return <Box as="span">{count}</Box>
}
