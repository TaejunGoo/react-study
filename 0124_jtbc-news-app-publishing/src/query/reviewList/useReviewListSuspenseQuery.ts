import { useSuspenseQuery } from '@tanstack/react-query'
import { reviewListQueryKey as queryKey } from '@/query/reviewList'
import { getReviewList as queryFn } from '@/query/reviewList/getReviewList'

export const useReviewListSuspenseQuery = () => {
	const { data, ...rest } = useSuspenseQuery({ queryKey, queryFn })

	return { data, ...rest }
}
