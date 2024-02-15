import type { QueryFunction } from '@tanstack/react-query'
import type { ReviewListQueryKey, ReviewResponse } from '@/query/reviewList'
import { http } from '@/utils/http'

export const getReviewList: QueryFunction<ReviewResponse, ReviewListQueryKey> = async () => {
	const { data } = await http.get<ReviewResponse>('/reviews')

	return data
}
