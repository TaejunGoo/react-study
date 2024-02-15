import type { ReviewResponse } from '@/query/reviewList'
import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { ProductRating } from '@/shared/components/demo/ProductRating'
import { ProductReviewCardStyled } from '@/shared/components/demo/ProductReviewCard.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

type ProductReviewCardProps = {
	review: ReviewResponse
}

export function ProductReviewCard({ review }: ProductReviewCardProps) {
	return (
		<ProductReviewCardStyled vertical={4}>
			<Spacer vertical={2}>
				<Alignment flex alignItems="center" className="user">
					<Box className="avatar" />
					<Box className="name">{review.name}</Box>
				</Alignment>
				{review.rating ? <ProductRating rating={review.rating} /> : null}
			</Spacer>
			<Box className="text">{review.text}</Box>
		</ProductReviewCardStyled>
	)
}
