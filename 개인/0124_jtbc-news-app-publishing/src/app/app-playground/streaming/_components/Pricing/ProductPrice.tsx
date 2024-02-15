import { multiply, toUnit, type Dinero } from 'dinero.js'
import type { Product } from '@/types'
import { ProductCurrencySymbol } from '@/app/app-playground/streaming/_components/Pricing/ProductCurrencySymbol'
import { ProductDeal } from '@/app/app-playground/streaming/_components/Pricing/ProductDeal'
import { ProductLighteningDeal } from '@/app/app-playground/streaming/_components/Pricing/ProductLighteningDeal'
import { ProductPriceStyled } from '@/app/app-playground/streaming/_components/Pricing/ProductPrice.styled'
import { Box } from '@/shared/components/demo/Box.styled'

function isDiscount(obj: Product['discount']): obj is { percent: number; expires?: number } {
	return typeof obj?.percent === 'number'
}

function formatDiscount(price: Dinero<number>, discountRaw: Product['discount']) {
	if (isDiscount(discountRaw)) {
		return {
			amount: multiply(price, {
				amount: discountRaw.percent,
				scale: 2,
			}),
			expires: discountRaw.expires,
		}
	}

	return undefined
}

export function ProductPrice({
	price,
	discount: discountRaw,
}: {
	price: Dinero<number>
	discount: Product['discount']
}) {
	const discount = formatDiscount(price, discountRaw)

	if (discount) {
		if (discount?.expires && typeof discount.expires === 'number') {
			return <ProductLighteningDeal price={price} discount={discount} />
		}
		return <ProductDeal price={price} discount={discount} />
	}

	return (
		<ProductPriceStyled flex>
			<Box className="currency">
				<ProductCurrencySymbol dinero={price} />
			</Box>
			<Box className="price">{toUnit(price)}</Box>
		</ProductPriceStyled>
	)
}
