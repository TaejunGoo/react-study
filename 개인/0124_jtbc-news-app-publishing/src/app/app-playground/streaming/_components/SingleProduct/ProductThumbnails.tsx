'use client'

import Image from 'next/image'
import styled from '@emotion/styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Box } from '@/shared/components/demo/Box.styled'

const ProductThumbnailsStyled = styled('div')`
	grid-column: 1 / -1;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		grid-column: span 1 / span 1;
	}

	.main {
		display: none;
		border-radius: 0.5rem;
		filter: grayscale(100%);

		/* @media lg */
		${({ theme }) => theme.mediaQueries.lg} {
			display: block;
		}
	}

	.thumbnail {
		width: 33.333333%;

		& > img {
			border-radius: 0.5rem;
			filter: grayscale(100%);
		}
	}
`

type ProductImage = {
	alt: string
	src: string
}

type ProductThumbnailsProps = {
	images: [ProductImage, ProductImage, ProductImage]
}

export const ProductThumbnails = ({ images }: ProductThumbnailsProps) => {
	return (
		<ProductThumbnailsStyled>
			<Spacer vertical={2}>
				<Image
					src={images[0].src}
					className="main"
					alt={images[0].alt}
					height={400}
					width={400}
				/>

				<Alignment flex gap={2}>
					{images.map(({ alt, src }) => (
						<Box className="thumbnail" key={alt}>
							<Image src={src} alt={alt} height={180} width={180} />
						</Box>
					))}
				</Alignment>
			</Spacer>
		</ProductThumbnailsStyled>
	)
}
