import { notFound } from 'next/navigation'
import { CategoryName } from '@/app/_components/CategoryName'
import { categoryPrefetchQuery } from '@/query/category/categoryPrefetchQuery'
import { BuggyButton } from '@/shared/components/demo/BuggyButton'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { SkeletonCard } from '@/shared/components/demo/SkeletonCard'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

type PageProps = {
	params: { categorySlug: string }
}

export default async function Page({ params }: PageProps) {
	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	if (!category) {
		notFound()
	}

	return (
		<Spacer vertical={4}>
			<CategoryName name={category.name}>All</CategoryName>
			<BuggyButton />
			<Grid cols={1} gap={6} lg={{ cols: 3 }}>
				{Array.from({ length: 9 })
					.map((_, index) => ({ id: index }))
					.map((item) => (
						<SkeletonCard key={item.id} />
					))}
			</Grid>
		</Spacer>
	)
}
