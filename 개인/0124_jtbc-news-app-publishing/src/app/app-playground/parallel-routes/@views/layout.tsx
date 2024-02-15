import { Boundary } from '@/shared/components/demo/Boundary'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabGroup } from '@/shared/components/demo/TabGroup'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Boundary labels={['parallel-routes/@views/layout.tsx']} size="small">
			<Spacer vertical={8}>
				<TabGroup
					path="/app-playground/parallel-routes"
					items={[
						{ text: 'Home' },
						{ text: 'Impressions', slug: 'impressions' },
						{ text: 'View Duration', slug: 'view-duration' },
					]}
				/>
				{children}
			</Spacer>
		</Boundary>
	)
}
