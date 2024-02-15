import { NotFoundStyled } from '@/app/_components/NotFound.styled'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Typography } from '@/shared/components/demo/Typography'

export default function NotFound() {
	return (
		<Boundary labels={['parallel-routes/not-found.tsx']} color="pink">
			<NotFoundStyled vertical={4}>
				<Typography variant="h2">Not Found</Typography>
				<p>Could not find requested resource</p>
			</NotFoundStyled>
		</Boundary>
	)
}
