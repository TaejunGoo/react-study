import { allocate, toUnit, up, type Dinero } from 'dinero.js'
import { ProductCurrencySymbol } from '@/app/app-playground/streaming/_components/Pricing/ProductCurrencySymbol'
import { ProductSplitPaymentsStyled } from '@/app/app-playground/streaming/_components/Pricing/PricingSplitPayments.styled'

export function ProductSplitPayments({ price }: { price: Dinero<number> }) {
	// only offer split payments for more expensive items
	if (toUnit(price) < 150) {
		return null
	}

	const [perMonth] = allocate(price, [1, 2])

	return (
		<ProductSplitPaymentsStyled>
			Or <ProductCurrencySymbol dinero={price} />
			{toUnit(perMonth, { digits: 0, round: up })}
			/month for 3 months
		</ProductSplitPaymentsStyled>
	)
}
