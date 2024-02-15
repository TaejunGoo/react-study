import type { Metadata } from 'next'
import { Box } from '@/shared/components/demo/Box.styled'

export const metadata: Metadata = {
	title: 'Modal',
	description: 'Modal Test',
}

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode
	modal: React.ReactNode
}) {
	return (
		<Box>
			<Box>{children}</Box>
			<Box>{modal}</Box>
		</Box>
	)
}
