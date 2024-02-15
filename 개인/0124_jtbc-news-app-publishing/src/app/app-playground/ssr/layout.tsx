import { Box } from '@/shared/components/demo/Box.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabGroup } from '@/shared/components/demo/TabGroup'

const title = 'Dynamic Data'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}
export default function Layout({ children }: { children: React.ReactNode }) {
	const ids = [{ id: '1' }, { id: '2' }, { id: '3' }]

	return (
		<Spacer vertical={9}>
			<TabGroup
				path="/app-playground/ssr"
				items={[
					{ text: 'Home' },
					...ids.map((x) => ({ text: `Post ${x.id}`, slug: x.id })),
				]}
			/>
			<Box>{children}</Box>
		</Spacer>
	)
}
