import { cookies } from 'next/headers'
import type { Product } from '@/types'
import { Pricing } from '@/app/app-playground/streaming/_components/Pricing'
import { ProductRating } from '@/shared/components/demo/ProductRating'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { ProductThumbnails } from '@/app/app-playground/streaming/_components/SingleProduct/ProductThumbnails'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { ProductName } from '@/app/app-playground/streaming/_components/SingleProduct/ProductName'
import { ProductDescription } from '@/app/app-playground/streaming/_components/SingleProduct/ProductDescription'
import { PricingBoxStyled } from '@/app/app-playground/streaming/_components/SingleProduct/PricingBox.styled'

export const SingleProduct = async ({ data }: { data: Promise<Response> }) => {
	const product = (await data.then((res) => res.json())) as Product

	// Get the cart count from the users cookies and pass it to the client
	// AddToCart component
	const cartCount = cookies().get('_cart_count')?.value || '0'

	const images = [
		{ src: `/demo/${product.image}` || '', alt: `${product.name}-1` },
		{ src: `/demo/${product.image}` || '', alt: `${product.name}-2` },
		{ src: `/demo/${product.image}` || '', alt: `${product.name}-3` },
	] as [{ src: string; alt: string }, { src: string; alt: string }, { src: string; alt: string }]

	return (
		<Grid cols={4} gap={6}>
			<ProductThumbnails images={images} />
			<Spacer vertical={4} colSpan={{ count: 'full' }} lg={{ colSpan: 2 }}>
				<ProductName name={product.name} />
				<ProductRating rating={product.rating} />
				<ProductDescription>
					<p>{product.description}</p>
					<p>{product.description}</p>
				</ProductDescription>
			</Spacer>
			<PricingBoxStyled>
				<Pricing product={product} cartCount={cartCount} />
			</PricingBoxStyled>
		</Grid>
	)
}
