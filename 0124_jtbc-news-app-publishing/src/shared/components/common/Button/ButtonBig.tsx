'use client'

import styled from '@emotion/styled'
import ButtonTest from './Button'

const ButtonBigStyled = styled(ButtonTest)`
	padding: 20px;
`

export default function ButtonBig({ children }: { children: React.ReactNode }) {
	return <ButtonBigStyled>{children}</ButtonBigStyled>
}
