'use client'

import styled from '@emotion/styled'
import SomeList, { ContentItemStyled, ListItemStyled } from '../SomeList/SomeList'

const ArrangedSomeListStyled = styled(SomeList)`
	background: green;
	display: flex;
	${ListItemStyled} {
		background: purple;
	}
	${ContentItemStyled} {
		width: 50px;
		background-color: red;
	}
`

export default function ArrangedSomeList() {
	return <ArrangedSomeListStyled />
}
