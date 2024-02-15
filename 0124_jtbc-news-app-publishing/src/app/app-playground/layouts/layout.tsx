import { Suspense } from 'react'
import { ClickCounter } from '@/shared/components/demo/ClickCounter'
import { TabGroup } from '@/shared/components/demo/TabGroup'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Box } from '@/shared/components/demo/Box.styled'

const title = 'Nested Layouts'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<Suspense>
					<TabGroup path="/app-playground/layouts" items={[{ text: 'Home' }]} />
				</Suspense>
				<Box alignSelf="flex-start">
					<ClickCounter />
				</Box>
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
