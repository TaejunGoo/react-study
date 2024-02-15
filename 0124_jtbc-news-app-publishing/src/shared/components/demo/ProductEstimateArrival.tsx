import { add, format, isTomorrow } from 'date-fns'
import { ProductEstimateArrivalStyled } from '@/shared/components/demo/ProductEstimateArrival.styled'

type ProductEstimatedArrivalProps = {
	leadTime: number
	hasDeliveryTime?: boolean
}

export function ProductEstimatedArrival({
	leadTime,
	hasDeliveryTime = false,
}: ProductEstimatedArrivalProps) {
	const date = add(new Date(), { days: leadTime })

	return (
		<ProductEstimateArrivalStyled>
			Get it{' '}
			<strong className="date">
				{isTomorrow(date) ? 'tomorrow, ' : null}
				{format(date, 'MMM d')}
			</strong>
			{hasDeliveryTime ? <> by 5pm</> : null}
		</ProductEstimateArrivalStyled>
	)
}
