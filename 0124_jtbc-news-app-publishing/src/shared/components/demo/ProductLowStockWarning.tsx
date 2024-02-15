import { ProductLowStockWarningStyled } from '@/shared/components/demo/ProductLowStockWarning.styled'

export function ProductLowStockWarning({ stock }: { stock: number }) {
	if (stock > 3) {
		return null
	}

	return (
		<ProductLowStockWarningStyled>
			{stock === 0 ? `Out of stock` : `Only ${stock} left in stock`}
		</ProductLowStockWarningStyled>
	)
}
