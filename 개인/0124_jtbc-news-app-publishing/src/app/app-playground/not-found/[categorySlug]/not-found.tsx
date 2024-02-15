import { Boundary } from '@/shared/components/demo/Boundary'
import { NotFoundStyled } from '@/app/_components/NotFound.styled'
import { Typography } from '@/shared/components/demo/Typography'

export default function NotFound() {
	return (
		<Boundary labels={['./[categorySlug]/not-found.tsx']} color="pink">
			<NotFoundStyled vertical={3}>
				<Typography variant="h2">Category Not Found</Typography>
				<p>Could not find requested resource</p>
			</NotFoundStyled>
		</Boundary>
	)
}
