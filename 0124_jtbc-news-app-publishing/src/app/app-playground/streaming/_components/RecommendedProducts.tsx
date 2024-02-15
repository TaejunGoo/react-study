import { type Product } from '@/types'
import { ProductCard } from '@/shared/components/demo/ProductCard'
import { Box } from '@/shared/components/demo/Box.styled'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { RecommendedProductsStyled } from '@/app/app-playground/streaming/_components/RecommendedProducts.styled'

export async function RecommendedProducts({
	path,
	data,
}: {
	path: string
	data: Promise<Response>
}) {
	const products = (await data.then((res) => res.json())) as Product[]

	return (
		<RecommendedProductsStyled vertical={6}>
			<Box>
				<Box className="title">Recommended Products for You</Box>
				<Box className="subtitle">Based on your preferences and shopping habits</Box>
			</Box>
			<Grid cols={4} gap={6}>
				{products.map((product) => (
					<Box key={product.id} className="card">
						<ProductCard product={product} href={`${path}/${product.id}`} />
					</Box>
				))}
			</Grid>
		</RecommendedProductsStyled>
	)
}
