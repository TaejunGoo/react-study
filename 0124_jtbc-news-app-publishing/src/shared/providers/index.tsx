import { ReactQueryProvider } from '@/shared/providers/ReactQueryProvider'
import { RootStyleRegistry } from '@/shared/providers/RootStyleRegistry'
import { RecoilContainer } from '@/shared/providers/RecoilContainer'

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<RecoilContainer>
			<ReactQueryProvider>
				<RootStyleRegistry>{children}</RootStyleRegistry>
			</ReactQueryProvider>
		</RecoilContainer>
	)
}
