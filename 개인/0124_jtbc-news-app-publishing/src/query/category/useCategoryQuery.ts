'use client'

import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { CategoryQueryKey, CategoryResponse, categoryQueryKeyFn } from '@/query/category'
import { getCategory } from '@/query/category/getCategory'

/**
 * @description hook for suspense(include useSuspenseQuery)
 * @warn Do not use it in a `server component`.
 */
export const useCategorySuspenseQuery = (props?: { slug?: string }) => {
	const queryKey = categoryQueryKeyFn(props ? { slug: props.slug } : null)
	const { data, ...rest } = useSuspenseQuery<
		CategoryResponse,
		AxiosError,
		CategoryResponse,
		CategoryQueryKey
	>({
		queryKey,
		queryFn: getCategory,
	})

	return {
		data,
		...rest,
	}
}

// props type
interface UseCategoryQueryProps {
	slug?: string
}

/**
 * @description hook(include useQuery)
 * @warn Do not use it in a `server component`.
 */
export const useCategoryQuery = ({ slug }: UseCategoryQueryProps) => {
	const queryKey = categoryQueryKeyFn(slug ? { slug } : null)
	const { data, ...rest } = useQuery<
		CategoryResponse,
		AxiosError,
		CategoryResponse,
		CategoryQueryKey
	>({
		queryKey,
		queryFn: getCategory,
		enabled: !!slug,
	})

	return {
		data,
		...rest,
	}
}
