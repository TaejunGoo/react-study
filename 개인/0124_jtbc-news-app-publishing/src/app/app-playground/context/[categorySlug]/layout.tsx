import { Suspense } from 'react'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Counter } from '@/app/app-playground/context/Counter'
import { TabGroup } from '@/shared/components/demo/TabGroup'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Box } from '@/shared/components/demo/Box.styled'

type LayoutProps = React.PropsWithChildren<{
	params: { categorySlug: string }
}>

export default async function Layout({ children, params }: LayoutProps) {
	return (
		<Boundary labels={['Layout [Server Component]']} animateRerendering={false}>
			<Spacer vertical={9}>
				<Suspense fallback={<Box>...loading</Box>}>
					<TabGroup
						path="/app-playground/context"
						parent={params.categorySlug}
						slug={params.categorySlug}
						items={[{ text: 'All' }]}
					/>
				</Suspense>
				<Counter />
				<Box>{children}</Box>
			</Spacer>
		</Boundary>
	)
}
