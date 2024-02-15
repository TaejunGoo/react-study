import { notFound } from 'next/navigation'
import { CategoryName } from '@/app/_components/CategoryName'
import { Skeleton } from '@/app/_components/Skeleton'
import { categoryPrefetchQuery } from '@/query/category/categoryPrefetchQuery'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

type PageProps = {
	params: {
		categorySlug: string
		subCategorySlug: string
	}
}

export default async function Page({ params }: PageProps) {
	// - `getCategory()` returns `notFound()` if the fetched data is `null` or `undefined`.
	// - `notFound()` renders the closest `not-found.tsx` in the route segment hierarchy.
	// - For `layout.js`, the closest `not-found.tsx` starts from the parent segment.
	// - For `page.js`, the closest `not-found.tsx` starts from the same segment.
	// - Learn more: https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy.

	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	if (!category) {
		notFound()
	}

	return (
		<Spacer vertical={4}>
			<CategoryName name={category.name} />
			<Skeleton slug={params.subCategorySlug} />
		</Spacer>
	)
}
