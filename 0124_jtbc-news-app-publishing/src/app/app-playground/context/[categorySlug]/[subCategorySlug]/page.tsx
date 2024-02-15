import { notFound } from 'next/navigation'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Counter } from '@/app/app-playground/context/Counter'
import { CategoryName } from '@/app/_components/CategoryName'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { categoryPrefetchQuery } from '@/query/category/categoryPrefetchQuery'

type PageProps = {
	params: {
		categorySlug: string
		subCategorySlug: string
	}
}

export default async function Page({ params }: PageProps) {
	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	if (!category) {
		notFound()
	}

	return (
		<Boundary labels={['Page [Server Component]']} animateRerendering={false}>
			<Spacer vertical={8}>
				<CategoryName name={category.name} />
				<Counter />
			</Spacer>
		</Boundary>
	)
}
