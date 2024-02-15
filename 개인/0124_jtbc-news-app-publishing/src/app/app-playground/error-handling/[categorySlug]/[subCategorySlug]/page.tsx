import { notFound } from 'next/navigation'
import { CategoryName } from '@/app/_components/CategoryName'
import { Skeleton } from '@/app/_components/Skeleton'
import { categoryPrefetchQuery } from '@/query/category/categoryPrefetchQuery'
import { BuggyButton } from '@/shared/components/demo/BuggyButton'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

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
		<Spacer vertical={4}>
			<CategoryName name={category.name} />
			<BuggyButton />
			<Skeleton slug={params.subCategorySlug} />
		</Spacer>
	)
}
