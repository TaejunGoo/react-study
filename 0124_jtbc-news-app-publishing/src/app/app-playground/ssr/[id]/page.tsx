import {
	ArticleBodyStyled,
	ArticleContentStyled,
	ArticleTitleStyled,
} from '@/app/_components/Article.styled'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { RenderingInfo } from '@/shared/components/demo/RenderingInfo'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export default async function Page({ params }: { params: { id: string } }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
		cache: 'no-store',
	})
	const data = (await res.json()) as { title: string; body: string }

	return (
		<Grid cols={6} gap={{ x: 6, y: 3 }}>
			<Spacer vertical={3} colSpan={{ count: 'full' }} lg={{ colSpan: 4 }}>
				<ArticleTitleStyled>{data.title}</ArticleTitleStyled>
				<ArticleBodyStyled>{data.body}</ArticleBodyStyled>
			</Spacer>
			<ArticleContentStyled>
				<RenderingInfo type="ssr" />
			</ArticleContentStyled>
		</Grid>
	)
}
