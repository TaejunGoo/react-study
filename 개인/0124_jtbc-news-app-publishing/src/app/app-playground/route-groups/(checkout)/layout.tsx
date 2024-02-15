import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Box } from '@/shared/components/demo/Box.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabNavItem } from '@/shared/components/demo/TabNavItem'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Boundary labels={['checkout layout']} color="blue" animateRerendering={false}>
			<Spacer vertical={9}>
				<Alignment flex alignItems="center" justifyContent="space-between">
					<Alignment flex alignItems="center" gap={4}>
						<TabNavItem href="/app-playground/route-groups">Back</TabNavItem>
					</Alignment>
				</Alignment>
				<Box>{children}</Box>
			</Spacer>
		</Boundary>
	)
}
