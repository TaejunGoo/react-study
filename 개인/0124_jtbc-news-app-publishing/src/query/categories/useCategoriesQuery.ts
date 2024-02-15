'use client'

/**
 * @description
 * 이 파일은 예시를 위한 파일입니다.
 */

import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { categoriesQueryKeyFn } from '@/query/categories'
import type { CategoriesQueryKey, CategoriesResponse } from '@/query/categories'
import { getCategories } from '@/query/categories/getCategories'

export const useCategoriesQuery = ({ parent, delay }: { parent?: string; delay?: number }) => {
	const queryKey = categoriesQueryKeyFn({ parent, delay })
	const { data, ...rest } = useQuery<
		CategoriesResponse,
		AxiosError,
		CategoriesResponse,
		CategoriesQueryKey
	>({
		queryKey,
		queryFn: getCategories,
		// enabled: !!props?.parent,
		placeholderData: [],
	})

	return {
		data,
		...rest,
	}
}
