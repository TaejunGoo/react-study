import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { ClickCounter } from '@/shared/components/demo/ClickCounter'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabGroup } from '@/shared/components/demo/TabGroup'

const title = 'Error Handling'

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
				<TabGroup path="/app-playground/error-handling" items={[{ text: 'Home' }]} />
				<Box alignSelf="flex-start">
					<ClickCounter />
				</Box>
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
