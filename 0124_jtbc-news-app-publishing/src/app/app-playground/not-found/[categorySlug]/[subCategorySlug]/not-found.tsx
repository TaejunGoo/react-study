import { NotFoundStyled } from '@/app/_components/NotFound.styled'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Typography } from '@/shared/components/demo/Typography'

export default function NotFound() {
	return (
		<Boundary labels={['./[categorySlug]/[subCategorySlug]/not-found.tsx']} color="pink">
			<NotFoundStyled vertical={3}>
				<Typography variant="h2">Sub Category Not Found</Typography>
				<p>Could not find requested resource</p>
			</NotFoundStyled>
		</Boundary>
	)
}
