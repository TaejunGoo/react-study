import { ClickCounter } from '@/shared/components/demo/ClickCounter'
import { TabGroup } from '@/shared/components/demo/TabGroup'
import { LayoutHooks } from '@/app/app-playground/hooks/_components/router-context-layout'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { Alignment } from '@/shared/components/demo/Alignment.styled'

const title = 'Hooks'

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
				<TabGroup path="/app-playground/hooks" items={[{ text: 'Home' }]} />
				<Box alignSelf="flex-start">
					<ClickCounter />
				</Box>
			</Alignment>
			<LayoutHooks />
			<Box>{children}</Box>
		</Spacer>
	)
}
