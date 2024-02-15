import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Box } from '@/shared/components/demo/Box.styled'
import { ClickCounter } from '@/shared/components/demo/ClickCounter'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabGroup } from '@/shared/components/demo/TabGroup'

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Boundary labels={['shop layout']} color="cyan" animateRerendering={false}>
			<Spacer vertical={9}>
				<Alignment flex justifyContent="space-between">
					<TabGroup
						path="/app-playground/route-groups"
						items={[
							{ text: 'Home' },
							{ text: 'Checkout', slug: 'checkout' },
							{ text: 'Blog', slug: 'blog' },
						]}
					/>
					<Box alignSelf="flex-start">
						<ClickCounter />
					</Box>
				</Alignment>
				<Box>{children}</Box>
			</Spacer>
		</Boundary>
	)
}
