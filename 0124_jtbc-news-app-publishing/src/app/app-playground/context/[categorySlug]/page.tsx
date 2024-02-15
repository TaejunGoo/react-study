import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Counter } from '@/app/app-playground/context/Counter'
import { CategoryName } from '@/app/_components/CategoryName'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { categoryPrefetchQuery } from '@/query/category/categoryPrefetchQuery'

export default async function Page({ params }: { params: { categorySlug: string } }) {
	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	if (!category) {
		notFound()
	}

	return (
		<Boundary labels={['Page [Server Component]']} animateRerendering={false}>
			<Spacer vertical={8}>
				<Suspense>
					<CategoryName name={category.name}>All</CategoryName>
				</Suspense>
				<Counter />
			</Spacer>
		</Boundary>
	)
}
