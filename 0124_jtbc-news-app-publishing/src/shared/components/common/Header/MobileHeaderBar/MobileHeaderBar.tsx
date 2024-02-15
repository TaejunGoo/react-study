'use client'

import styled from '@emotion/styled'
import Link from 'next/link'

const MobileHeaderBarLayoutStyled = styled('div')`
	width: 100%;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #fff;
	position: relative;
	z-index: 2;
	& > .leftArea,
	& > .rightArea {
		display: flex;
		align-items: center;
	}
	& > .logoArea {
		a {
			display: block;
			width: 100px;
			height: 20px;
			background-color: aqua;
			text-align: center;
		}
	}
`

export default function MobileHeaderBar({
	leftChild,
	rightChild,
}: {
	leftChild: React.ReactNode
	rightChild: React.ReactNode
}) {
	return (
		<MobileHeaderBarLayoutStyled>
			<div className="leftArea">{leftChild}</div>
			<div className="logoArea">
				<h1>
					<Link href="/">JTBC</Link>
				</h1>
			</div>
			<div className="rightArea">{rightChild}</div>
		</MobileHeaderBarLayoutStyled>
	)
}
