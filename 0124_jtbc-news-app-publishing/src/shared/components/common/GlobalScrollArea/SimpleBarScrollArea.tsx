'use client'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export default function SimpleBarScrollArea({ children }: { children: React.ReactNode }) {
	return (
		<SimpleBar forceVisible="y" style={{ maxHeight: '100vh' }}>
			{children}
		</SimpleBar>
	)
}
