export type ReviewResponse = {
	id: string
	name: string
	rating: number
	text: string
}

export const reviewListQueryKey = ['@review/list'] as const

export type ReviewListQueryKey = typeof reviewListQueryKey
