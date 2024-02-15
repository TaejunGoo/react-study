import { QueryFunction } from '@tanstack/react-query'
import { CategoryQueryKey, CategoryResponse } from '@/query/category'
import { http } from '@/utils/http'

// fetch function
export const getCategory: QueryFunction<CategoryResponse, CategoryQueryKey> = async ({
	queryKey,
}) => {
	const [, slugQueryKey] = queryKey
	const { data } = await http.get<CategoryResponse>('/api-example/categories', {
		params: {
			slug: slugQueryKey?.slug,
		},
	})

	return data
}
