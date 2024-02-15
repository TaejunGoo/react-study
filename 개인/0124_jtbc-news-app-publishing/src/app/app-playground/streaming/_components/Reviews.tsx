import { ReviewStyled } from '@/app/app-playground/streaming/_components/Review.styled'
import type { ReviewResponse } from '@/query/reviewList'
import { Box } from '@/shared/components/demo/Box.styled'
import { ProductReviewCard } from '@/shared/components/demo/ProductReviewCard'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export async function Reviews({ data }: { data: Promise<Response> }) {
	const reviews = (await data.then((res) => res.json())) as ReviewResponse[]

	return (
		<ReviewStyled vertical={6}>
			<Box className="title">Customer Reviews</Box>
			<Spacer vertical={8}>
				{reviews.map((review) => (
					<ProductReviewCard key={review.id} review={review} />
				))}
			</Spacer>
		</ReviewStyled>
	)
}
