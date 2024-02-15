'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Fragment, Suspense } from 'react'
import styled from '@emotion/styled'
import { highlight } from '@/utils/theme/keyframes'
import { Box } from '@/shared/components/demo/Box.styled'

const ParamsStyled = styled('div')`
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	color: ${({ theme }) => theme.color.gray500};

	.paths {
		padding-left: 0.25rem;
		padding-right: 0.25rem;

		.path {
			color: ${({ theme }) => theme.color.gray100};
			animation: ${highlight} 1s ease-in-out 1;
		}
	}
`

function Params() {
	const searchParams = useSearchParams()

	return searchParams.toString().length !== 0 ? (
		<ParamsStyled>
			<Box as="span">?</Box>
			{Array.from(searchParams.entries()).map(([key, value], index) => (
				<Fragment key={key}>
					{index !== 0 ? <Box as="span">&</Box> : null}
					<Box as="span" className="paths">
						<Box as="span" className="path">
							{key}
						</Box>
						<Box as="span">=</Box>
						<Box as="span" className="path">
							{value}
						</Box>
					</Box>
				</Fragment>
			))}
		</ParamsStyled>
	) : null
}

const AddressBarStyled = styled('div')`
	box-shadow: ${({ theme }) => theme.shadow.addressBar};
	padding: 1px;
	background-image: ${({ theme }) => theme.color.border.section};
	border-radius: 0.5rem;

	.inner {
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.black};
	}

	.content {
		/* @media lg */
		${({ theme }) => theme.mediaQueries.lg} {
			padding-top: 0.75rem;
			padding-bottom: 0.75rem;
			padding-left: 1.25rem;
			padding-right: 1.25rem;
		}
		padding: 0.875rem;
		-moz-column-gap: 0.5rem;
		column-gap: 0.5rem;
		align-items: center;
		display: flex;
	}

	.icon {
		color: ${({ theme }) => theme.color.gray600};

		svg {
			height: 1rem;
		}
	}

	.paths {
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 1.25rem;
		-moz-column-gap: 0.25rem;
		column-gap: 0.25rem;
		display: flex;

		.seperate {
			color: ${({ theme }) => theme.color.gray600};
		}

		.home {
			color: ${({ theme }) => theme.color.gray400};
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}

		.item {
			color: ${({ theme }) => theme.color.gray100};
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
			padding-left: 0.375rem;
			padding-right: 0.375rem;
			border-radius: 9999px;
			animation: ${highlight} 1s ease-in-out 1;
		}
	}
`

export function AddressBar() {
	const pathname = usePathname()

	return (
		<AddressBarStyled>
			<Box className="inner">
				<Box className="content">
					<Box className="icon">
						<svg
							xmlns="h ttp://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clipRule="evenodd"
							/>
						</svg>
					</Box>
					<Box className="paths">
						<Box>
							<Box as="span" className="home">
								Home
							</Box>
						</Box>
						{pathname ? (
							<>
								<Box as="span" className="seperate">
									/
								</Box>
								{pathname
									.split('/')
									.slice(2)
									.map((segment) => (
										<Fragment key={segment}>
											<Box as="span">
												<Box as="span" className="item">
													{segment}
												</Box>
											</Box>
											<Box as="span" className="seperate">
												/
											</Box>
										</Fragment>
									))}
							</>
						) : null}
						<Suspense>
							<Params />
						</Suspense>
					</Box>
				</Box>
			</Box>
		</AddressBarStyled>
	)
}
