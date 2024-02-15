import { dinero, type DineroSnapshot } from 'dinero.js'
import { Suspense } from 'react'
import type { Product } from '@/types'
import { Ping } from '@/shared/components/demo/Ping'
import { ProductPrice } from '@/app/app-playground/streaming/_components/Pricing/ProductPrice'
import { AddToCart } from '@/app/app-playground/streaming/_components/AddToCart'
import { LoadingDots } from '@/app/app-playground/streaming/_components/Pricing/LoadingDots'
import { UserSpecificDetails } from '@/app/app-playground/streaming/_components/Pricing/UserSpecificDetails'
import { PricingStyled } from '@/app/app-playground/streaming/_components/Pricing/Pricing.styled'
import { Box } from '@/shared/components/demo/Box.styled'

export function Pricing({ product, cartCount }: { product: Product; cartCount: string }) {
	const price = dinero(product.price as DineroSnapshot<number>)

	return (
		<PricingStyled vertical={4}>
			<ProductPrice price={price} discount={product.discount} />
			<Box display="block" position="relative">
				<Box display="block" position="absolute" left={-4} top={1}>
					<Ping />
				</Box>
			</Box>
			<Suspense fallback={<LoadingDots />}>
				<UserSpecificDetails productId={product.id} />
			</Suspense>
			<AddToCart initialCartCount={Number(cartCount)} />
		</PricingStyled>
	)
}
