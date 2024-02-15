import type { Metadata } from 'next'
import { TabGroup } from '@/shared/components/demo/TabGroup'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Box } from '@/shared/components/demo/Box.styled'

const title = 'Incremental Static Regeneration (ISR)'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
} satisfies Metadata

type LayoutProps = React.PropsWithChildren

export default function Layout({ children }: LayoutProps) {
	const ids = [{ id: '1' }, { id: '2' }, { id: '3' }]

	return (
		<Spacer vertical={9}>
			<TabGroup
				path="/app-playground/isr"
				items={[
					{ text: 'Home' },
					...ids.map((x) => ({ text: `Post ${x.id}`, slug: x.id })),
				]}
			/>
			<Box>{children}</Box>
		</Spacer>
	)
}
