import { Box } from '@/shared/components/demo/Box.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { TabGroup } from '@/shared/components/demo/TabGroup'

const title = 'Styling'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

const items = [
	{
		text: 'Styled Components',
		slug: 'styled-components',
	},
]

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Spacer vertical={9}>
			<TabGroup path="/app-playground/styling" items={[{ text: 'Home' }, ...items]} />
			<Box>{children}</Box>
		</Spacer>
	)
}
