import { notFound } from 'next/navigation'
import { SkeletonCard } from '@/shared/components/demo/SkeletonCard'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { TitleStyled } from '@/app/app-playground/loading/Title.styled'

type PageProps = {
	params: { categorySlug: string }
}

export default async function Page({ params }: PageProps) {
	const res = await fetch(
		// We intentionally delay the response to simulate a slow data
		// request that would benefit from `loading.js`
		`https://app-router-api.vercel.app/api/categories?delay=2000&slug=${params.categorySlug}`,
		{
			// We intentionally disable Next.js Cache to better demo
			// `loading.js`
			cache: 'no-cache',
		},
	)

	if (!res.ok) {
		// Render the closest `error.js` Error Boundary
		throw new Error('Something went wrong!')
	}

	const category = await res.json()

	if (!category) {
		// Render the closest `not-found.js` Error Boundary
		notFound()
	}

	return (
		<Spacer vertical={4} className="space-y-4">
			<TitleStyled>{category.name}</TitleStyled>
			<Grid cols={1} gap={6} lg={{ cols: 3 }}>
				{Array.from({ length: category.count })
					.map((_, i) => ({ id: i }))
					.map((item) => (
						<SkeletonCard key={item.id} />
					))}
			</Grid>
		</Spacer>
	)
}
