import { Tab } from '@/shared/components/demo/Tab'
import { RandomPostTab } from '@/app/app-playground/ssg/RandomPostTab'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Box } from '@/shared/components/demo/Box.styled'

const title = 'Static Data'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Spacer vertical={9}>
			<Alignment flex flexWrap alignItems="center" gap={2}>
				<Tab path="/app-playground/ssg" item={{ text: 'Home' }} />
				<Tab path="/app-playground/ssg" item={{ text: 'Post 1', slug: '1' }} />
				<Tab path="/app-playground/ssg" item={{ text: 'Post 2', slug: '2' }} />
				<RandomPostTab path="/app-playground/ssg" />
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
