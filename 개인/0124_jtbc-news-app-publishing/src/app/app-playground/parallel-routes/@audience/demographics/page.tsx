import { Boundary } from '@/shared/components/demo/Boundary'
import { Prose } from '@/shared/components/demo/Prose'

export default function Page() {
	return (
		<Boundary labels={['@audience/demographics/page.tsx']} size="small">
			<Prose title="Demographics" />
		</Boundary>
	)
}
