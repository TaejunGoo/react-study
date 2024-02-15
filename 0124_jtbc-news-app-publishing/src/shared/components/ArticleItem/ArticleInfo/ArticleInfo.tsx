import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { UseSizeRules, generateResponsiveStyles } from '../generateResponsiveStyles'

const sizeList = {
	lg: css`
		margin-top: 10px;
		background-color: red;
		& > .keyword {
			font-size: 18px;
		}
		& > .titleArea {
			gap: 5px;
			font-size: 22px;
		}
		& > .descArea {
			font-size: 20px;
		}
	`,
	md: css`
		margin-top: 10px;
		background-color: orange;
		& > .keyword {
			font-size: 12px;
		}
		& > .titleArea {
			gap: 4px;
			font-size: 16px;
		}
		& > .descArea {
			font-size: 14px;
		}
	`,
	sm: css`
		margin-top: 10px;
		background-color: yellow;
		& > .keyword {
			font-size: 10px;
		}
		& > .titleArea {
			gap: 3px;
			font-size: 14px;
		}
		& > .descArea {
			font-size: 12px;
		}
	`,
}

interface ArticleInfoLayoutStyledProps {
	infoSize?: UseSizeRules
}
const ArticleInfoLayoutStyled = styled('div')<ArticleInfoLayoutStyledProps>`
	flex-grow: 1;
	margin-top: 10px;
	& > .keyword {
		color: #13679f;
	}
	& > .titleArea {
		display: inline-flex;
		gap: 5px;
		font-size: 12px;
		font-weight: bold;
		.titleInsert {
			&.red {
				color: #990027;
			}
			&.blue {
				color: #13679f;
			}
		}
		.title {
			color: #080f2f;
		}
	}
	& > .descArea {
		font-size: 12px;
		.view,
		.writer,
		.releaseTime {
			font-size: inherit;
			color: #878d99;
		}
	}
	${(props) => props.infoSize && generateResponsiveStyles(sizeList, props.infoSize)}
`

interface ArticleInfoProps extends React.ComponentProps<typeof ArticleInfoLayoutStyled> {
	keyword?: string
	title: string
	titleInsert?: string
	titleInsertColor?: string
	view?: string
	writer?: string
	releaseTime?: string
}
export default function ArticleInfo({
	keyword,
	title,
	titleInsert,
	titleInsertColor = 'blue',
	view,
	writer,
	releaseTime,
	infoSize,
}: ArticleInfoProps) {
	return (
		<ArticleInfoLayoutStyled infoSize={infoSize}>
			{keyword && <div className="keyword">{keyword}</div>}
			<div className="titleArea">
				{titleInsert && (
					<span className={`titleInsert ${titleInsertColor}`}>{titleInsert}</span>
				)}
				<span className="title">{title}</span>
			</div>
			<div className="descArea">
				{view && <div className="view">조회수 {view}</div>}
				{writer && <div className="writer">작성자 {writer}</div>}
				{releaseTime && <div className="releaseTime">작성시간 {releaseTime}</div>}
			</div>
		</ArticleInfoLayoutStyled>
	)
}
