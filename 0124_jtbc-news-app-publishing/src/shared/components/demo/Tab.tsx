'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { memo } from 'react'
import styled from '@emotion/styled'
import type { Item } from '@/shared/components/demo/TabGroup'
import { useCategoryQuery } from '@/query/category/useCategoryQuery'

const TabStyled = styled(Link)`
	border-radius: 0.5rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 50;

	background-color: ${({ theme }) => theme.color.gray700};
	color: ${({ theme }) => theme.color.gray100};

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:not(.active):hover {
			background-color: ${({ theme }) => theme.color.gray500};
			color: ${({ theme }) => theme.color.white};
		}
	}

	&.active {
		background-color: ${({ theme }) => theme.color.vercel_blue};
		color: ${({ theme }) => theme.color.white};
	}
`

export const Tab = memo(
	({
		path,
		parallelRoutesKey,
		item,
		slug,
	}: {
		path: string
		parallelRoutesKey?: string
		item: Item
		slug?: string
	}) => {
		const { data: category } = useCategoryQuery({ slug })
		const segment = useSelectedLayoutSegment(parallelRoutesKey)

		const detailSlug = item.slug

		const href = detailSlug
			? `${path}${category ? `/${category.slug}` : ''}${detailSlug ? `/${detailSlug}` : ''}`
			: path
		const isActive =
			// Example home pages e.g. `/layouts`
			(!detailSlug && segment === null) ||
			segment === item.segment ||
			// Nested pages e.g. `/layouts/electronics`
			segment === detailSlug

		return (
			<TabStyled href={href} className={isActive ? `active` : ''}>
				{item.text}
			</TabStyled>
		)
	},
)
