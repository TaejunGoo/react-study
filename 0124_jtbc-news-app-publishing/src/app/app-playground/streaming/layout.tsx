import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabGroup } from '@/shared/components/demo/TabGroup'

const title = 'Streaming'

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
				<TabGroup
					path="/app-playground/streaming"
					items={[
						{ text: 'Home' },
						{ text: 'Edge Runtime', slug: 'edge/product/1', segment: 'edge' },
						{ text: 'Node Runtime', slug: 'node/product/1', segment: 'node' },
					]}
				/>
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
