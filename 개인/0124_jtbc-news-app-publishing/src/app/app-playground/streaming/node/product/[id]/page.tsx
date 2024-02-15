import { Suspense } from 'react'
import { RecommendedProducts } from '@/app/app-playground/streaming/_components/RecommendedProducts'
import { Reviews } from '@/app/app-playground/streaming/_components/Reviews'
import { SingleProduct } from '@/app/app-playground/streaming/_components/SingleProduct'
import { Ping } from '@/shared/components/demo/Ping'
import {
	RecommendedProductsSkeleton,
	ReviewsSkeleton,
} from '@/app/app-playground/streaming/Skeleton.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export default async function Page({ params }: { params: { id: string } }) {
	return (
		<Spacer vertical={8} lg={{ spaceY: 14 }}>
			<SingleProduct
				data={fetch(`https://app-router-api.vercel.app/api/products?id=${params.id}`)}
			/>

			<Box className="relative">
				<Box position="absolute" left={-4} top={2}>
					<Ping />
				</Box>
			</Box>

			<Suspense fallback={<RecommendedProductsSkeleton />}>
				<RecommendedProducts
					path="/streaming/node/product"
					data={fetch(
						// We intentionally delay the reponse to simulate a slow data
						// request that would benefit from streaming
						`https://app-router-api.vercel.app/api/products?delay=500&filter=${params.id}`,
						{
							// We intentionally disable Next.js Cache to better demo
							// streaming
							cache: 'no-store',
						},
					)}
				/>
			</Suspense>

			<Box position="relative">
				<Box position="absolute" left={-4} top={2}>
					<Ping />
				</Box>
			</Box>

			<Suspense fallback={<ReviewsSkeleton />}>
				<Reviews
					data={fetch(
						// We intentionally delay the reponse to simulate a slow data
						// request that would benefit from streaming
						'https://app-router-api.vercel.app/api/reviews?delay=1000',
						{
							// We intentionally disable Next.js Cache to better demo
							// streaming
							cache: 'no-store',
						},
					)}
				/>
			</Suspense>
		</Spacer>
	)
}
