'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { Box } from '@/shared/components/demo/Box.styled'

const LinkBlockStyled = styled(Link)`
	/* group  */
	display: block;
	margin-top: 0.375rem;
	margin-bottom: 0.375rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray900};
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;

	& > .name {
		font-weight: 500;
		color: ${({ theme }) => theme.color.gray200};
	}

	& > .description {
		/*    */
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: ${({ theme }) => theme.color.gray400};
	}

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:hover {
			background-color: ${({ theme }) => theme.color.gray800};

			& > .name {
				color: ${({ theme }) => theme.color.gray50};
			}

			& > .description {
				color: ${({ theme }) => theme.color.gray300};
			}
		}
	}
`

type LinkBlockType = {
	list: {
		slug: string
		name: string
		description?: string
	}[]
}

export const LinkBlockList = ({ list }: LinkBlockType) => {
	return (
		<Grid cols={1} gap={5} lg={{ cols: 2 }}>
			{list.map(({ slug, name, description }) => (
				<LinkBlockStyled href={`/app-playground/snippets/${slug}`} key={name}>
					<Box className="name">{name}</Box>
					{description ? <Box className="description">{description}</Box> : null}
				</LinkBlockStyled>
			))}
		</Grid>
	)
}
