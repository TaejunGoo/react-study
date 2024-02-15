'use client'

import styled from '@emotion/styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { NavItem } from '@/shared/components/demo/GlobalNavigation/NavItem'
import { type Item } from '@/shared/components/demo/menu'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

const Name = styled('div')`
	margin-bottom: 0.5rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: ${({ theme }) => theme.color.gray400_80};
`

type SectionProps = {
	name: string
	items: Item[]
	close(): void
}

export function Section({ name, items, close }: SectionProps) {
	return (
		<Box>
			<Name>
				<Box>{name}</Box>
			</Name>

			<Spacer vertical={1}>
				{items.map((item) => (
					<NavItem key={item.slug} item={item} close={close} />
				))}
			</Spacer>
		</Box>
	)
}
