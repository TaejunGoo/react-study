import { dinero, type DineroSnapshot } from 'dinero.js'
import Image from 'next/image'
import { type Product } from '@/types'
import { ProductBestSeller } from '@/shared/components/demo/ProductBestSeller'
import { ProductEstimatedArrival } from '@/shared/components/demo/ProductEstimateArrival'
import { ProductLowStockWarning } from '@/shared/components/demo/ProductLowStockWarning'
import { ProductPrice } from '@/app/app-playground/streaming/_components/Pricing/ProductPrice'
import { ProductRating } from '@/shared/components/demo/ProductRating'
import { ProductUsedPrice } from '@/shared/components/demo/ProductUsedPrice'
import { ProductCardStyled } from '@/shared/components/demo/ProductCard.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Box } from '@/shared/components/demo/Box.styled'

export function ProductCard({ product, href }: { product: Product; href: string }) {
	const price = dinero(product.price as DineroSnapshot<number>)

	return (
		<ProductCardStyled href={href}>
			<Spacer vertical={2}>
				<Box className="visual">
					{product.isBestSeller ? (
						<Box className="badge">
							<ProductBestSeller />
						</Box>
					) : null}
					<Image
						src={`/demo/${product.image}`}
						width={400}
						height={400}
						className="image"
						alt={product.name}
						placeholder="blur"
						blurDataURL={product.imageBlur}
					/>
				</Box>

				<Box className="product-name">{product.name}</Box>

				{product.rating ? <ProductRating rating={product.rating} /> : null}

				<ProductPrice price={price} discount={product.discount} />

				{/* <ProductSplitPayments price={price} /> */}

				{product.usedPrice ? <ProductUsedPrice usedPrice={product.usedPrice} /> : null}

				<ProductEstimatedArrival leadTime={product.leadTime} />

				{product.stock <= 1 ? <ProductLowStockWarning stock={product.stock} /> : null}
			</Spacer>
		</ProductCardStyled>
	)
}
