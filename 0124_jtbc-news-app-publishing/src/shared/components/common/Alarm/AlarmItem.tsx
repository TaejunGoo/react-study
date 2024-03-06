import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

const AlarmItemStyled = styled(Link)`
	display: flex;
	padding: 1.4rem 0rem 1.2rem 0rem;
	align-items: flex-start;
	gap: 1.6rem;
	align-self: stretch;
	border-bottom: 1px solid #f2f2f2;
`

const ThumbWrapStyled = styled('div')`
	width: 4rem;
	height: 4rem;
	border-radius: 4rem;
	border: 0.05rem solid rgba(0, 0, 0, 0.1);
	background: #f6f6f6;
	overflow: hidden;
	flex-shrink: 0;
`

const ThumbImgStyled = styled('img')`
	display: block;
	width: 100%;
	height: 100%;
`

interface ContentContainerStyledProps {
	$newItem?: boolean
}
const ContentContainerStyled = styled('div')<ContentContainerStyledProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.4rem;
	flex-grow: 1;
	padding-right: 2rem;
	position: relative;
	${({ $newItem }) =>
		$newItem &&
		css`
			&::before {
				content: '';
				display: block;
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 0.8rem;
				background: #0157aa;
				position: absolute;
				right: 0;
				top: 50%;
				margin-top: -0.4rem;
			}
		`}
`

const InfoContainerStyled = styled('div')`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	align-self: stretch;
`

const CategoryStyled = styled('span')`
	color: #0157aa;
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1.33; /* 133.333% */
`

const TimeStyled = styled('span')`
	color: #777;
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.33; /* 133.333% */
`

const TitleStyled = styled('p')`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	align-self: stretch;
	overflow: hidden;
	color: #242424;
	text-overflow: ellipsis;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.46; /* 146.667% */
`

interface AlarmItemProps {
	newItem?: boolean
}

export default function AlarmItem({ newItem }: AlarmItemProps) {
	return (
		<AlarmItemStyled href="/">
			<ThumbWrapStyled>
				<ThumbImgStyled src="demo/alexander-andrews-brAkTCdnhW8-unsplash.jpg" />
			</ThumbWrapStyled>
			<ContentContainerStyled $newItem={newItem}>
				<InfoContainerStyled>
					<CategoryStyled>속보</CategoryStyled>
					<TimeStyled>지금</TimeStyled>
				</InfoContainerStyled>
				<TitleStyled>
					한동훈 지역·비례 출마 않겠다…불체포특권 포기 약속해야 공천
				</TitleStyled>
			</ContentContainerStyled>
		</AlarmItemStyled>
	)
}
