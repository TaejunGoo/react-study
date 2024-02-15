'use client'

import { createContext, useContext, useMemo, useState } from 'react'

type State = [number, React.Dispatch<React.SetStateAction<number>>]

const CounterContext = createContext<State | undefined>(undefined)

export function CounterProvider({ children }: { children: React.ReactNode }) {
	const [count, setCount] = useState(0)
	const values = useMemo(() => [count, setCount] as State, [count])

	return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
}

export function useCounter() {
	const context = useContext(CounterContext)
	if (context === undefined) {
		throw new Error('useCounter must be used within a CounterProvider')
	}
	return context
}
