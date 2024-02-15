'use client'

import Link from 'next/link'
import styled from '@emotion/styled'

const MenuGroup = styled('div')`
	& > :not([hidden]) ~ :not([hidden]) {
		--tw-space-y-reverse: 0;
		margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
		margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
	}
`

const MenuBlockTitle = styled('div')`
	color: ${({ theme }) => theme.color.gray200};
	font-weight: 500;
`

const MenuBlockDescription = styled('div')`
	color: ${({ theme }) => theme.color.gray400};
	font-size: 0.875rem;
	line-height: 1.25rem;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
`

const MenuBlock = styled(Link)`
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	background-color: ${({ theme }) => theme.color.gray900};
	border-radius: 0.5rem;
	display: block;

	& > :not([hidden]) ~ :not([hidden]) {
		margin-top: 0.375rem;
		margin-bottom: 0;
	}

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:hover {
			background-color: ${({ theme }) => theme.color.gray800};

			${MenuBlockTitle} {
				color: ${({ theme }) => theme.color.gray50};
			}

			${MenuBlockDescription} {
				color: ${({ theme }) => theme.color.gray300};
			}
		}
	}
`

const MenuGroupTitle = styled('div')`
	color: ${({ theme }) => theme.color.gray400};
	letter-spacing: 0.05em;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 0.75rem;
	line-height: 1rem;
`

const MenuBlockContainer = styled('div')`
	gap: 1.25rem;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	display: grid;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`

type MenuGroupStyledProps = {
	title: string
	items: {
		slug: string
		name: string
		description?: string
	}[]
}

export function MenuGroupStyled({ title, items }: MenuGroupStyledProps) {
	return (
		<MenuGroup>
			<MenuGroupTitle>{title}</MenuGroupTitle>
			<MenuBlockContainer>
				{items.map((item) => (
					<MenuBlock href={`/app-playground/${item.slug}`} key={item.name}>
						<MenuBlockTitle>{item.name}</MenuBlockTitle>
						{item.description && (
							<MenuBlockDescription>{item.description}</MenuBlockDescription>
						)}
					</MenuBlock>
				))}
			</MenuBlockContainer>
		</MenuGroup>
	)
}
