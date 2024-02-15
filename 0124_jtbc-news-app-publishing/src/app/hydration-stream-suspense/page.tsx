import { Suspense } from 'react'
import { ListUsers } from '@/app/hydration-stream-suspense/_component/ListUser'
import { ListUsersPageWrapper } from '@/shared/components/styled'

export const revalidate = 0

export default async function HydrationStreamSuspense() {
	return (
		<ListUsersPageWrapper>
			<Suspense fallback={<p>loading...</p>}>
				<ListUsers />
			</Suspense>
		</ListUsersPageWrapper>
	)
}
