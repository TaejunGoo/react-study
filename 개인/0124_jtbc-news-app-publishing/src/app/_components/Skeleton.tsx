'use client'

import { useCategorySuspenseQuery } from '@/query/category/useCategoryQuery'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { SkeletonCard } from '@/shared/components/demo/SkeletonCard'

export function Skeleton({ slug }: { slug: string }) {
	const { data: category } = useCategorySuspenseQuery({ slug })

	return (
		<Grid cols={1} gap={6} lg={{ cols: 3 }}>
			{Array.from({ length: category.count })
				.map((_, index) => ({ id: index }))
				.map((item) => (
					<SkeletonCard key={item.id} />
				))}
		</Grid>
	)
}
