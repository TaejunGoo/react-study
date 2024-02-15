import { ExternalLink } from '@/shared/components/demo/ExternalLink'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Title } from '@/app/_components/Title'
import { LinkBlockList } from '@/app/_components/LinkBlockList'
import { Alignment } from '@/shared/components/demo/Alignment.styled'

const items = [
	{
		name: 'Updating searchParams',
		slug: 'search-params',
		description: '`useRouter` 와 `<Link>`를 사용하여 searchParams 업데이트',
	},
]

export default function Page() {
	return (
		<Spacer vertical={6}>
			<Title top>Code Snippets</Title>
			<LinkBlockList list={items} />
			<Alignment flex gap={2}>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/snippets">
					Code
				</ExternalLink>
			</Alignment>
		</Spacer>
	)
}
