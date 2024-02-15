'use client'

import styled from '@emotion/styled'

const TestBox = styled('div')`
	width: 100px;
	height: 100px;
	background-color: red;
	${({ theme }) => `
			${theme.mediaQueries.xs} {
				width: 200px;
				height: 200px;
			}
			${theme.mediaQueries.sm} {
				width: 300px;
				height: 300px;
			}
			${theme.mediaQueries.md} {
				width: 400px;
				height: 400px;
			}
			${theme.mediaQueries.lg} {
				width: 500px;
				height: 500px;
				background-color: ${theme.color.bg.pink600}
			}
		`}
`

export default function MQTest() {
	return <TestBox />
}
