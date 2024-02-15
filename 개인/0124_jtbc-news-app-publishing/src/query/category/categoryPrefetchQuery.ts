/**
 * @description prefetch for `server component`
 */

import { getQueryClient } from '@/utils/misc/getQueryClient'
import { categoryQueryKeyFn, type CategoryParams, type CategoryResponse } from '@/query/category'
import { getCategory } from '@/query/category/getCategory'

export const categoryPrefetchQuery = async ({ slug }: CategoryParams) => {
	const queryClient = getQueryClient()
	const queryKey = categoryQueryKeyFn({ slug })

	await queryClient.prefetchQuery({ queryKey, queryFn: getCategory })

	const data = queryClient.getQueryData<CategoryResponse>(queryKey)

	if (!data) {
		queryClient.invalidateQueries({ queryKey })
	}

	return { data }
}
