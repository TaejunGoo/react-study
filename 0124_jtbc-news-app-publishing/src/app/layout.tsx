import type { Metadata, Viewport } from 'next'
import { Providers } from '@/shared/providers'
import { MSWRunner } from '@/shared/providers/MSWRunner'
import TestHeader from '@/shared/components/common/Header/Header'
import TestFooter from '@/shared/components/common/Footer/Footer'
import Content from '@/shared/components/common/Content/Content'
import Container from '@/shared/components/common/Container/Container'

const APP_NAME = 'PWA App'
const APP_DEFAULT_TITLE = 'My Awesome PWA App'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION = 'Best PWA app in the world! aaaaaaa'

export const metadata: Metadata = {
	metadataBase: new URL(process.env.SITE_URL),
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	manifest: '/manifest.json',
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: APP_DEFAULT_TITLE,
		// startUpImage: [],
	},
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		type: 'website',
		siteName: APP_NAME,
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
	twitter: {
		card: 'summary',
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
}

export const viewport: Viewport = {
	themeColor: '#FFFFFF',
}

type RootRayoutProps = React.PropsWithChildren

export default function RootLayout({ children }: RootRayoutProps) {
	// const VERSION = '20231212'

	return (
		<html lang="ko" className="[color-scheme:dark]">
			<head>
				{/* <link rel="stylesheet" href={`${process.env.STYLESHEET_GLOBAL}?V=${VERSION}`} /> */}
			</head>
			<body>
				<MSWRunner />
				<Providers>
					<TestHeader />
					<Content>
						<Container>{children}</Container>
					</Content>
					<TestFooter />
				</Providers>
			</body>
		</html>
	)
}
