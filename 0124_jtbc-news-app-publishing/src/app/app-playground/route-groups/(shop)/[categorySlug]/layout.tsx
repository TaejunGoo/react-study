import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { ClickCounter } from '@/shared/components/demo/ClickCounter'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabGroup } from '@/shared/components/demo/TabGroup'

export default async function Layout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { categorySlug: string }
}) {
	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<TabGroup
					parent={params.categorySlug}
					slug={params.categorySlug}
					path="/app-playground/route-groups"
					items={[{ text: 'All' }]}
				/>
				<Box alignSelf="flex-start">
					<ClickCounter />
				</Box>
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
