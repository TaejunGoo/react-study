import { QueryFunction } from '@tanstack/react-query'
import type { CategoriesQueryKey, CategoriesResponse } from '@/query/categories'
import { http } from '@/utils/http'

type GetCategories = QueryFunction<CategoriesResponse, CategoriesQueryKey>

export const getCategories: GetCategories = async ({ queryKey }) => {
	const [, parentQueryKey] = queryKey
	const { data } = await http.get<CategoriesResponse>('/api-example/categories', {
		params: parentQueryKey,
	})
	return data
}
