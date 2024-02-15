import { toUnit, type Dinero } from 'dinero.js'
import { ProductCurrencySymbol } from '@/app/app-playground/streaming/_components/Pricing/ProductCurrencySymbol'
import { ProductDealStyled } from '@/app/app-playground/streaming/_components/Pricing/ProductDeal.styled'
import { Box } from '@/shared/components/demo/Box.styled'

export function ProductDeal({
	price: priceRaw,
	discount: discountRaw,
}: {
	price: Dinero<number>
	discount: {
		amount: Dinero<number>
	}
}) {
	const discount = toUnit(discountRaw.amount)
	const price = toUnit(priceRaw)
	const percent = Math.round(100 - (discount / price) * 100)

	return (
		<ProductDealStyled>
			<Box className="percent">-{percent}%</Box>
			<Box className="symbol">
				<Box className="symbol-inner">
					<ProductCurrencySymbol dinero={discountRaw.amount} />
				</Box>
				<Box className="discount">{discount}</Box>
			</Box>
			<Box className="symbol-with-price">
				<ProductCurrencySymbol dinero={priceRaw} />
				{price}
			</Box>
		</ProductDealStyled>
	)
}
