import { notFound } from 'next/navigation'
import { CategoryName } from '@/app/_components/CategoryName'
import { HooksClient } from '@/app/app-playground/hooks/_components/router-context'
import { categoryPrefetchQuery } from '@/query/category/categoryPrefetchQuery'
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
		<Spacer vertical={9}>
			<CategoryName name={category.name}>All</CategoryName>
			<HooksClient />
		</Spacer>
	)
}
