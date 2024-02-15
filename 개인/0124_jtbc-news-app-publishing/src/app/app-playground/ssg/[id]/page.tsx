import { notFound } from 'next/navigation'
import { RenderingInfo } from '@/shared/components/demo/RenderingInfo'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import {
	ArticleBodyStyled,
	ArticleContentStyled,
	ArticleTitleStyled,
} from '@/app/_components/Article.styled'

export async function generateStaticParams() {
	// Generate two pages at build time and the rest (3-100) on-demand
	return [{ id: '1' }, { id: '2' }]
}

export default async function Page({ params }: { params: { id: string } }) {
	if (Number(params.id) >= 100) {
		notFound()
	}

	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
	const data = (await res.json()) as { title: string; body: string }

	const isOnDemand = Number(params.id) >= 3

	return (
		<Grid cols={6} gap={{ x: 6, y: 3 }}>
			<Spacer vertical={3} colSpan={{ count: 'full' }} lg={{ colSpan: 4 }}>
				<ArticleTitleStyled>{data.title}</ArticleTitleStyled>
				<ArticleBodyStyled>{data.body}</ArticleBodyStyled>
			</Spacer>
			<ArticleContentStyled>
				<RenderingInfo type={isOnDemand ? 'ssgod' : 'ssg'} />
			</ArticleContentStyled>
		</Grid>
	)
}
