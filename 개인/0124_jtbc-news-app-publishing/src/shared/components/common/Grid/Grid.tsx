'use client'

import styled from '@emotion/styled'
import { Theme, css } from '@emotion/react'

type SizeNumber = { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }

interface GridProps {
	allSpacing?: SizeNumber
	rowSpacing?: SizeNumber
	columnSpacing?: SizeNumber
	columns?: SizeNumber
	container?: boolean
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
}
const generateColumn = (columns: GridProps['columns'], theme: Theme) => {
	if (columns) {
		return Object.entries(columns).map(([key, val]) => {
			const mediaQueryKey = key as keyof typeof theme.mediaQueries
			return val
				? css`
						${theme.mediaQueries[mediaQueryKey]} {
							--Grid-columns: ${val};
						}
					`
				: ''
		})
	}
	return css`
		--Grid-columns: 12;
	`
}
const generateSpacing = (
	spacing: GridProps['allSpacing'],
	rowSpacing: GridProps['rowSpacing'],
	columnSpacing: GridProps['columnSpacing'],
	theme: Theme,
) => {
	let spacingStyle
	let rowSpacingStyle
	let columnSpacingStyle

	// 전체 간격 처리
	if (spacing) {
		spacingStyle = Object.entries(spacing).map(([key, val]) => {
			const mediaQueryKey = key as keyof typeof theme.mediaQueries
			return val
				? css`
						${theme.mediaQueries[mediaQueryKey]} {
							--Grid-rowSpacing: ${val}px;
							--Grid-columnSpacing: ${val}px;
						}
					`
				: ''
		})
	}

	// 행 간격 처리
	if (rowSpacing) {
		rowSpacingStyle = Object.entries(rowSpacing).map(([key, val]) => {
			const mediaQueryKey = key as keyof typeof theme.mediaQueries
			return val
				? css`
						${theme.mediaQueries[mediaQueryKey]} {
							--Grid-rowSpacing: ${val}px;
						}
					`
				: ''
		})
	}

	// 열 간격 처리
	if (columnSpacing) {
		columnSpacingStyle = Object.entries(columnSpacing).map(([key, val]) => {
			const mediaQueryKey = key as keyof typeof theme.mediaQueries
			return val
				? css`
						${theme.mediaQueries[mediaQueryKey]} {
							--Grid-columnSpacing: ${val}px;
						}
					`
				: ''
		})
	}
	return css`
		--Grid-rowSpacing: 0px;
		--Grid-columnSpacing: 0px;
		${spacingStyle}
		${rowSpacingStyle}
		${columnSpacingStyle}
	`
}
const generateGridWidth = (
	xs: GridProps['xs'],
	sm: GridProps['sm'],
	md: GridProps['md'],
	lg: GridProps['lg'],
	xl: GridProps['xl'],
	theme: Theme,
) => {
	return css`
		max-width: 100%;
		flex-grow: 1;
		flex-basis: 0px;
		${xs && theme.mediaQueries.xs} {
			flex-grow: 0;
			flex-basis: auto;
			width: calc(100% * ${xs} / var(--Grid-columns));
		}
		${sm && theme.mediaQueries.sm} {
			flex-grow: 0;
			flex-basis: auto;
			width: calc(100% * ${sm} / var(--Grid-columns));
		}
		${md && theme.mediaQueries.md} {
			flex-grow: 0;
			flex-basis: auto;
			width: calc(100% * ${md} / var(--Grid-columns));
		}
		${lg && theme.mediaQueries.lg} {
			flex-grow: 0;
			flex-basis: auto;
			width: calc(100% * ${lg} / var(--Grid-columns));
		}
		${lg && theme.mediaQueries.xl} {
			flex-grow: 0;
			flex-basis: auto;
			width: calc(100% * ${xl} / var(--Grid-columns));
		}
	`
}

const GridStyled = styled('div')<GridProps>`
	min-width: 0;
	${(props) =>
		props.container
			? css`
					display: flex;
					flex-wrap: wrap;
					flex-direction: row;
					align-items: stretch;
					${generateColumn(props.columns, props.theme)}
					${generateSpacing(
						props.allSpacing,
						props.rowSpacing,
						props.columnSpacing,
						props.theme,
					)}
				margin: calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2);
				`
			: css`
					padding: calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);
					${generateGridWidth(
						props.xs,
						props.sm,
						props.md,
						props.lg,
						props.xl,
						props.theme,
					)}
				`}
`

type GridTypes = React.PropsWithChildren<React.ComponentProps<typeof GridStyled>>
/**
 * 반응형 그리드 레이아웃을 렌더링하는 Grid 컴포넌트
 *
 * @param props.allSpacing 그리드 아이템 간 간격(상하좌우 모두). 기본값 0
 * @param props.rowSpacing 그리드 아이템 간 간격(상하)
 * @param props.columnSpacing 그리드 아이템 간 간격(좌우)
 * @param props.columns 각 브레이크포인트에서의 그리드 컬럼 수. 기본값 12
 * @param props.container 그리드가 컨테이너로 동작해야 하는지 여부
 * @param props.xs Mobile xs(0 ~ 479px) 화면에서 아이템이 차지하는 비율
 * @param props.sm Mobile sm(480 ~ 767px) 화면에서 아이템이 차지하는 비율
 * @param props.md Tablet md(768 ~ 1023px) 화면에서 아이템이 차지하는 비율
 * @param props.lg Medium Desktop lg(1024px ~ ) 화면에서 아이템이 차지하는 비율
 * @param props.xl Larget Desktop xl(1280px ~ ) 화면에서 아이템이 차지하는 비율
 */
export default function Grid({
	children,
	allSpacing,
	rowSpacing,
	columnSpacing,
	columns,
	container,
	xs,
	sm,
	md,
	lg,
	xl,
}: GridTypes) {
	return (
		<GridStyled
			allSpacing={allSpacing}
			rowSpacing={rowSpacing}
			columnSpacing={columnSpacing}
			columns={columns}
			container={container}
			xs={xs}
			sm={sm}
			md={md}
			lg={lg}
			xl={xl}>
			{children}
		</GridStyled>
	)
}
