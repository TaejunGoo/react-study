'use client'

import { createContext, useContext, useMemo, useState } from 'react'

type State = [number, React.Dispatch<React.SetStateAction<null | number>>]

const CartCountContext = createContext<State | undefined>(undefined)

export function CartCountProvider({
	children,
	initialCartCount,
}: {
	children: React.ReactNode
	initialCartCount: number
}) {
	const [optimisticCartCount, setOptimisticCartCount] = useState<null | number>(null)

	const count = optimisticCartCount !== null ? optimisticCartCount : initialCartCount

	const values = useMemo<State>(() => [count, setOptimisticCartCount], [count])

	return <CartCountContext.Provider value={values}>{children}</CartCountContext.Provider>
}

export function useCartCount() {
	const context = useContext(CartCountContext)
	if (context === undefined) {
		throw new Error('useCartCount must be used within a CartCountProvider')
	}
	return context
}
