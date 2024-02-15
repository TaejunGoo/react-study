import { Theme, css } from '@emotion/react'
import styled from '@emotion/styled'
import { SizeNumberByMedia } from './articleTypes'
import { UseSizeRules, generateResponsiveStyles } from '../generateResponsiveStyles'

// 뷰포트에 따른 썸네일 width 지정
interface ThumbLayoutStyledProps {
	thumbWidth?: SizeNumberByMedia
}
const generateThumbWidth = (sizes: SizeNumberByMedia, theme: Theme) => {
	if (sizes) {
		return Object.entries(sizes).map(([key, val]) => {
			const mediaQueryKey = key as keyof typeof theme.mediaQueries
			return val
				? css`
						${theme.mediaQueries[mediaQueryKey]} {
							width: ${val}px;
						}
					`
				: ''
		})
	}
	return css`
		width: auto;
	`
}

const ThumbLayoutStyled = styled('div')<ThumbLayoutStyledProps>`
	position: relative;
	width: auto;
	overflow: hidden;
	${(props) => props.thumbWidth && generateThumbWidth(props.thumbWidth, props.theme)}
`

const ThumbImageStyled = styled('img')`
	width: 100%;
	transition: transform 0.4s;
	${({ theme }) => css`
		${theme.mediaQueries.hover} {
			&:hover {
				transform: scale(1.05);
			}
		}
	`}
`

// 뷰포트에 따른 썸네일 UI 크기 타입 지정
interface ThumbUiStyledProps {
	thumbUiSize?: UseSizeRules
}
const sizeList = {
	lg: css`
		& > .playTime {
			font-size: 16px;
		}
		& > .playIcon {
			width: 30px;
			height: 30px;
			background-color: red;
		}
	`,
	md: css`
		& > .playTime {
			font-size: 14px;
		}
		& > .playIcon {
			width: 26px;
			height: 26px;
			background-color: orange;
		}
	`,
	sm: css`
		& > .playTime {
			font-size: 14px;
		}
		& > .playIcon {
			width: 22px;
			height: 22px;
			background-color: yellow;
		}
	`,
}

const ThumbUiStyled = styled('div')<ThumbUiStyledProps>`
	.playIcon {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 26px;
		height: 26px;
		background-color: aqua;
	}
	.playTime {
		position: absolute;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		color: #fff;
		font-size: 13px;
		line-height: 1;
		padding: 10px;
	}
	.live {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10px;
		background-color: red;
		color: #fff;
		font-size: 12px;
	}
	${(props) => props.thumbUiSize && generateResponsiveStyles(sizeList, props.thumbUiSize)}
`

// 두 컴포넌트의 props 타입을 교차 타입으로 결합
type ArticleThumbProps = ThumbLayoutStyledProps &
	ThumbUiStyledProps & {
		thumbSrc: string
		thumbType: 'picture' | 'video' | 'live'
	}

export default function ArticleThumb({
	thumbSrc,
	thumbType = 'picture',
	thumbWidth,
	thumbUiSize,
}: ArticleThumbProps) {
	return (
		<ThumbLayoutStyled thumbWidth={thumbWidth}>
			<ThumbImageStyled src={thumbSrc} />
			{thumbType !== 'picture' && (
				<ThumbUiStyled thumbUiSize={thumbUiSize}>
					{thumbType === 'video' && (
						<>
							<div className="playIcon" />
							<div className="playTime">03:38</div>
						</>
					)}
					{thumbType === 'live' && <div className="live">LIVE</div>}
				</ThumbUiStyled>
			)}
		</ThumbLayoutStyled>
	)
}
