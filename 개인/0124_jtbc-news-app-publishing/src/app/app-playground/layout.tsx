import type { Metadata } from 'next'
import { AddressBar } from '@/shared/components/demo/AddressBar'
import { GlobalNavigation } from '@/shared/components/demo/GlobalNavigation'
import { Container } from '@/app/app-playground/Container.styled'
import { Content } from '@/app/app-playground/Content.styled'

export const metadata: Metadata = {
	title: {
		default: 'Next.js App Router',
		template: '%s | Next.js App router',
	},
	description:
		'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
	openGraph: {
		title: 'Next.js App Router Playground',
		description:
			'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
		images: ['/api/og?title=Next.js App Router'],
	},
	twitter: {
		card: 'summary_large_image',
	},
}

type RootRayoutProps = React.PropsWithChildren

export default function Layout({ children }: RootRayoutProps) {
	return (
		<>
			<GlobalNavigation />
			<Container>
				<AddressBar />
				<Content>{children}</Content>
			</Container>
		</>
	)
}
