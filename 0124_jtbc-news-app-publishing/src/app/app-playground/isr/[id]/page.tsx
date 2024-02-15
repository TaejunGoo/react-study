import { DescriptionStyled, InfoStyled, TitleStyled } from '@/app/app-playground/isr/[id]/styled'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { RenderingInfo } from '@/shared/components/demo/RenderingInfo'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export const dynamicParams = true

export async function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function Page({ params }: { params: { id: string } }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
		next: { revalidate: 60, tags: ['collection'] },
	})
	const data = (await res.json()) as { title: string; body: string }

	return (
		<Grid cols={6} gap={{ x: 6, y: 3 }} className="wwwwwww">
			<Spacer vertical={3} colSpan={{ count: 'full', lg: 4 }}>
				<TitleStyled>{data.title}</TitleStyled>
				<DescriptionStyled>{data.body}</DescriptionStyled>
			</Spacer>
			<InfoStyled>
				<RenderingInfo type="isr" />
			</InfoStyled>
		</Grid>
	)
}
