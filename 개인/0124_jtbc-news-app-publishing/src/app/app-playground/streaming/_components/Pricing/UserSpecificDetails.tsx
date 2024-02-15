import { dinero, type DineroSnapshot } from 'dinero.js'
import { ProductSplitPayments } from '@/app/app-playground/streaming/_components/Pricing/ProductSplitPayments'
import type { Product } from '@/types'
import { ProductUsedPrice } from '@/shared/components/demo/ProductUsedPrice'
import { ProductEstimatedArrival } from '@/shared/components/demo/ProductEstimateArrival'
import { ProductLowStockWarning } from '@/shared/components/demo/ProductLowStockWarning'

export async function UserSpecificDetails({ productId }: { productId: string }) {
	const data = await fetch(
		`https://app-router-api.vercel.app/api/products?id=${productId}&delay=500&filter=price,usedPrice,leadTime,stock`,
		{
			// We intentionally disable Next.js Cache to better demo
			// streaming
			cache: 'no-store',
		},
	)

	const product = (await data.json()) as Product

	const price = dinero(product.price as DineroSnapshot<number>)

	return (
		<>
			<ProductSplitPayments price={price} />
			{product.usedPrice ? <ProductUsedPrice usedPrice={product.usedPrice} /> : null}
			<ProductEstimatedArrival leadTime={product.leadTime} hasDeliveryTime />
			{product.stock <= 1 ? <ProductLowStockWarning stock={product.stock} /> : null}
		</>
	)
}
