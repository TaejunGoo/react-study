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
			<Box>
				<Alignment flex justifyContent="space-between">
					<TabGroup
						parent={params.categorySlug}
						slug={params.categorySlug}
						path="/error-handling"
						items={[{ text: 'All' }]}
					/>

					<Box alignSelf="flex-start">
						<ClickCounter />
					</Box>
				</Alignment>
			</Box>
			<Box>{children}</Box>
		</Spacer>
	)
}
