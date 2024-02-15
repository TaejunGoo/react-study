import { notFound } from 'next/navigation'
import { CategoryName } from '@/app/_components/CategoryName'
import { categoryPrefetchQuery } from '@/query/category/categoryPrefetchQuery'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { SkeletonCard } from '@/shared/components/demo/SkeletonCard'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export default async function Page({ params }: { params: { categorySlug: string } }) {
	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	if (!category) {
		notFound()
	}

	return (
		<Spacer vertical={4}>
			<CategoryName name={category.name}>All</CategoryName>
			<Grid cols={1} gap={6} lg={{ cols: 3 }}>
				{Array.from({ length: 9 })
					.map((_, i) => ({ id: i }))
					.map((item) => (
						<SkeletonCard key={item.id} />
					))}
			</Grid>
		</Spacer>
	)
}
