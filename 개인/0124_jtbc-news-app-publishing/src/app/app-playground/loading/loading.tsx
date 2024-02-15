import { TitleStyled } from '@/app/app-playground/loading/Title.styled'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { SkeletonCard } from '@/shared/components/demo/SkeletonCard'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export default function Loading() {
	return (
		<Spacer vertical={4}>
			<TitleStyled>Loading...</TitleStyled>
			<Grid cols={1} gap={6} lg={{ cols: 3 }}>
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
			</Grid>
		</Spacer>
	)
}
