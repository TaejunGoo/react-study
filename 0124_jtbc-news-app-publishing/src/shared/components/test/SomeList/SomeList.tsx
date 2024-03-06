'use client'

import styled from '@emotion/styled'

const ListStyled = styled('ul')`
	padding: 10px;
	background: gray;
`

export const ListItemStyled = styled('li')`
	padding: 10px;
	background: black;
`

export const ContentItemStyled = styled('div')`
	width: 300px;
	height: 20px;
	background: white;
	border-radius: 10px;
`

interface SomeListProps {
	className?: string
}
export default function SomeList({ className }: SomeListProps) {
	return (
		<ListStyled className={className}>
			<ListItemStyled>
				<ContentItemStyled />
			</ListItemStyled>
			<ListItemStyled>
				<ContentItemStyled />
			</ListItemStyled>
			<ListItemStyled>
				<ContentItemStyled />
			</ListItemStyled>
		</ListStyled>
	)
}
