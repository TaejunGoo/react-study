'use client'

import { useCategoriesQuery } from '@/query/categories/useCategoriesQuery'
import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Tab } from '@/shared/components/demo/Tab'

export type Item = {
	text: string
	slug?: string
	segment?: string
	parallelRoutesKey?: string
}

type TabGroupProps = {
	path: string
	parallelRoutesKey?: string
	items: Item[]
	parent?: string
	slug?: string
}

export function TabGroup({ path, parallelRoutesKey, items, parent, slug }: TabGroupProps) {
	const { data: categories } = useCategoriesQuery({ parent })

	const list = items.concat(
		(categories || []).map((x) => ({
			text: x.name,
			slug: x.slug,
		})),
	)

	return (
		<Alignment flex flexWrap alignItems="center" gap={2}>
			{list.map((item) => (
				<Tab
					slug={slug}
					key={`${path}${item.slug}`}
					item={item}
					path={path}
					parallelRoutesKey={parallelRoutesKey}
				/>
			))}
		</Alignment>
	)
}
