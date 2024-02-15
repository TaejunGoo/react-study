import { Box } from '@/shared/components/demo/Box.styled'
import { RenderingPageSkeletonStyled } from '@/shared/components/demo/RenderingPageSkeleton.styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export const RenderingPageSkeleton = () => {
	return (
		<RenderingPageSkeletonStyled cols={6} gap={{ x: 6, y: 3 }}>
			<Spacer vertical={3} colSpan={{ count: 'full' }} lg={{ colSpan: 4 }}>
				<Box className="title" />
				<Box className="paragraph" />
			</Spacer>
			<Box className="section">
				<Box className="inner">
					<Box className="item-1" />
					<Box className="item-2" />
				</Box>
			</Box>
		</RenderingPageSkeletonStyled>
	)
}
