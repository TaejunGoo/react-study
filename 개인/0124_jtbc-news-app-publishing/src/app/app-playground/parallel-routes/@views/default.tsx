import { CurrentRoute } from '@/app/app-playground/parallel-routes/(ui)/current-route'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Prose } from '@/shared/components/demo/Prose'
import { ButtonLink } from '@/shared/components/demo/Button.styled'

export default function Default() {
	return (
		<Boundary labels={['@views/default.tsx']} color="blue" size="small">
			<Prose
				title="Default UI"
				smallParagraph={
					<>
						<li>
							<code>
								@views/
								<CurrentRoute />
								/page.js
							</code>{' '}
							가 존재하지 않습니다.
						</li>

						<li>
							<code>@views/default.js</code> 가 존재합니다.
						</li>
					</>
				}
				buttonGroup={<ButtonLink href="/app-playground/parallel-routes">Home</ButtonLink>}>
				<p>
					<code>@views</code> 슬롯에 현재{' '}
					<code>
						/
						<CurrentRoute slice={1} />
					</code>{' '}
					Route와 일치하는 Route Segment가 <strong>포함되어 있지 않기 때문에</strong> 기본
					UI가 렌더링됩니다.
				</p>
			</Prose>
		</Boundary>
	)
}
