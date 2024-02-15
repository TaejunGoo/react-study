import { Boundary } from '@/shared/components/demo/Boundary'
import { TabGroup } from '@/shared/components/demo/TabGroup'
import { CounterProvider } from '@/app/app-playground/context/counter-context'
import { ContextClickCounter } from '@/app/app-playground/context/ContextClickCounter'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { Alignment } from '@/shared/components/demo/Alignment.styled'

const title = 'Client Context'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	// const {} = useCategoriesQuery()
	return (
		<Boundary labels={['Server Component Boundary']} size="small" animateRerendering={false}>
			<Boundary
				labels={['Counter Context Provider [Client Component]']}
				color="blue"
				size="small"
				animateRerendering={false}>
				<CounterProvider>
					<Boundary
						labels={['Server Component Boundary']}
						size="small"
						animateRerendering={false}>
						<Spacer vertical={9}>
							<Alignment flex justifyContent="space-between">
								<TabGroup
									path="/app-playground/context"
									items={[{ text: 'Home' }]}
								/>
							</Alignment>
							<ContextClickCounter />
							<Box>{children}</Box>
						</Spacer>
					</Boundary>
				</CounterProvider>
			</Boundary>
		</Boundary>
	)
}
