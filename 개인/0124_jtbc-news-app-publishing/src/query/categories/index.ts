type Category = {
	name: string
	slug: string
	count: number
	parent: string | null
}

export type CategoriesResponse = Category[]

export type CategoriesParams = {
	parent?: string
	delay?: number
}

export const categoriesQueryKeyFn = (paramsKey: CategoriesParams | null) =>
	['@menu/categories', paramsKey] as const

export type CategoriesQueryKey = ReturnType<typeof categoriesQueryKeyFn>
