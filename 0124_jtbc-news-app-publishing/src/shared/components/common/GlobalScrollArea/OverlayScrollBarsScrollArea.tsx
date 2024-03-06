'use client'

import 'overlayscrollbars/overlayscrollbars.css'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

interface OverlayScrollBarsScrollAreaProps {
	children: React.ReactNode
}
export default function OverlayScrollBarsScrollArea({
	children,
}: OverlayScrollBarsScrollAreaProps) {
	return (
		<OverlayScrollbarsComponent
			defer
			events={{
				scroll: (i, e) => {
					console.log(i, e)
				},
			}}
			style={{ maxHeight: '100vh' }}>
			{children}
		</OverlayScrollbarsComponent>
	)
}
