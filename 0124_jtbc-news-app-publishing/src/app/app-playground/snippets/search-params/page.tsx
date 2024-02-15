import { Suspense } from 'react'
import { Boundary } from '@/shared/components/demo/Boundary'
import { ExternalLink } from '@/shared/components/demo/ExternalLink'
import { ActiveLink } from '@/app/app-playground/snippets/search-params/ActiveLink'
import { Client } from '@/app/app-playground/snippets/search-params/Client'
import { Prose } from '@/shared/components/demo/Prose'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { Title } from '@/app/_components/Title'
import { Box } from '@/shared/components/demo/Box.styled'
import { Label } from '@/app/_components/Label'

const options = [
	{
		name: 'Sort',
		value: 'sort',
		items: ['asc', 'desc'],
	},
	{
		name: 'Page',
		value: 'page',
		items: ['1', '2', '3'],
	},
	{
		name: 'Items Per Page',
		value: 'perPage',
		items: ['10', '25', '100'],
	},
]

export const dynamic = 'force-dynamic'

export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
	return (
		<Prose
			title={
				<>
					<code>searchParams</code> 업데이트
				</>
			}>
			<p>
				<code>useSearchParams</code> hook은
				<code>URLSearchParams</code>의 readOnly 버전을 반환합니다.
				<code>useRouter&#40;&#41;</code> 또는
				<code>&lt;Link&gt;</code>를 사용하여 새로운
				<code>searchParams</code>를 설정할 수 있습니다. 탐색이 수행된 후 현재
				<code>page.tsx</code>는 업데이트된
				<code>searchParams</code> prop을 받게 됩니다.
			</p>
			<Spacer vertical={12} mt={12}>
				<Spacer vertical={4}>
					<Boundary color="blue" labels={['From the Client']}>
						<Title as="h3">
							<code>useRouter&#40;&#41;</code> 사용
						</Title>
						<Suspense>
							<Client options={options} />
						</Suspense>
					</Boundary>
					<ExternalLink href="https://nextjs.org/docs/app/api-reference/functions/use-search-params">
						Docs
					</ExternalLink>
				</Spacer>
				<Spacer vertical={4}>
					<Boundary labels={['From the Server']}>
						<Title as="h3">
							<code>&lt;Link&gt;</code> 사용
						</Title>

						<Alignment flex alignItems="center" gap={6}>
							{options.map((option) => (
								<Box display="block" key={option.name}>
									<Label>{option.name}</Label>

									<Alignment flex gap={2} mt={1}>
										{option.items.map((item, i) => {
											const isActive =
												// set the first item as active if no search param is set
												(!searchParams[option.value] && i === 0) ||
												// otherwise check if the current item is the active one
												item === searchParams[option.value]

											// create new searchParams object for easier manipulation
											const params = new URLSearchParams(searchParams)
											params.set(option.value, item)
											return (
												<ActiveLink
													key={item}
													isActive={isActive}
													searchParams={params.toString()}>
													{item}
												</ActiveLink>
											)
										})}
									</Alignment>
								</Box>
							))}
						</Alignment>
					</Boundary>

					<ExternalLink href="https://nextjs.org/docs/app/api-reference/file-conventions/page">
						Docs
					</ExternalLink>
				</Spacer>
			</Spacer>
		</Prose>
	)
}
