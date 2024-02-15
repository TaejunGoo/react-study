// response type
export type CategoryResponse = {
	name: string
	slug: string
	count: number
	parent: string | null
}

// parameter type
export type CategoryParams = {
	slug?: string
}

// query key type
export type CategoryQueryKey = ReturnType<typeof categoryQueryKeyFn>

// query key generate function(include parameter)
export const categoryQueryKeyFn = (paramsKey: CategoryParams | null) =>
	['@menu/category', paramsKey] as const
