'use client'

import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'
import { Boundary } from '@/shared/components/demo/Boundary'
import { CodePreview } from '@/app/app-playground/hooks/_components/CodePreview'

export function LayoutHooks() {
	const selectedLayoutSegment = useSelectedLayoutSegment()
	const selectedLayoutSegments = useSelectedLayoutSegments()

	return selectedLayoutSegment ? (
		<Boundary labels={['Client Component Hooks']} size="small">
			<CodePreview>
				{JSON.stringify(
					{
						useSelectedLayoutSegment: selectedLayoutSegment,
						useSelectedLayoutSegments: selectedLayoutSegments,
					},
					null,
					2,
				)}
			</CodePreview>
		</Boundary>
	) : null
}
