import { dinero, toUnit, up, type DineroSnapshot } from 'dinero.js'
import { type Product } from '@/types'
import { ProductUsedPriceStyled } from '@/shared/components/demo/ProductUsedPrice.styled'
import { Box } from '@/shared/components/demo/Box.styled'

export function ProductUsedPrice({ usedPrice: usedPriceRaw }: { usedPrice: Product['usedPrice'] }) {
	const usedPrice = dinero(usedPriceRaw as DineroSnapshot<number>)

	return (
		<ProductUsedPriceStyled>
			<Box className="title">More buying choices</Box>
			<Box className="unit">${toUnit(usedPrice, { digits: 0, round: up })} (used)</Box>
		</ProductUsedPriceStyled>
	)
}
