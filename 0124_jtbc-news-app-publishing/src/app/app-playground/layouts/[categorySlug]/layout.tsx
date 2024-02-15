import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { ClickCounter } from '@/shared/components/demo/ClickCounter'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabGroup } from '@/shared/components/demo/TabGroup'

type LayoutProps = React.PropsWithChildren<{
	params: { categorySlug: string }
}>

export default async function Layout({ children, params }: LayoutProps) {
	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<TabGroup
					slug={params.categorySlug}
					parent={params.categorySlug}
					path="/app-playground/layouts"
					items={[{ text: 'All' }]}
				/>
				<Box alignSelf="flex-start" className="self-start">
					<ClickCounter />
				</Box>
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
