import styled from '@emotion/styled'
import { css } from '@emotion/react'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { CloseIcon, TrashCanIcon } from '@/shared/utils/svg'
import AlarmList from './AlarmList'

const AlarmLayerStyled = styled('div')`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	flex-shrink: 0;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			position: absolute;
			top: calc(100% + 0.8rem);
			left: auto;
			right: 0;
			bottom: auto;
			border-radius: 0.8rem;
			box-shadow: 0rem 0.4rem 1.6rem 0rem rgba(36, 36, 36, 0.15);
			width: 42rem;
			height: 52.8rem;
		}
	`}
`

const HeaderStyled = styled('div')`
	display: flex;
	flex-direction: column;
	align-self: stretch;
	gap: 8px;
	padding: 2rem 2.4rem 0rem 2.4rem;
`

const TitleContainerStyled = styled('div')`
	display: flex;
	width: 100%;
	align-items: center;
`

const TitleStyled = styled('h3')`
	color: #242424;
	font-size: 2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.2;
	flex-grow: 1;
`

const BtnContainerStyled = styled('div')`
	display: flex;
	align-items: center;
	gap: 0.4rem;
`

const UtilityBtnStyled = styled('button')`
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	width: 24px;
	height: 2.4rem;
	border: 0;
	padding: 0;
	cursor: pointer;
`

const ContentContainerStyled = styled(SimpleBar)`
	overflow-y: auto;
	flex-grow: 1;
	align-self: stretch;
	display: flex;
	flex-direction: column;
	padding: 0 2.4rem;
`

const NoAlarmDescStyled = styled('div')`
	display: flex;
	flex-grow: 1;
	padding: 3.2rem 0;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #f2f2f2;
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 1.46;
	color: #242424;
`

const DescStyled = styled('div')`
	padding: 1.6rem 0rem 2.4rem 0rem;
	color: #777;
	font-size: 1.3rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.38; /* 138.462% */
	text-align: center;
`

interface AlarmLayerProps {
	isVisible: boolean
	handleAlarmLayerVisible: () => void
}
export default function AlarmLayer({ isVisible, handleAlarmLayerVisible }: AlarmLayerProps) {
	return isVisible ? (
		<AlarmLayerStyled>
			<HeaderStyled>
				<TitleContainerStyled>
					<TitleStyled>알림</TitleStyled>
					<BtnContainerStyled>
						<UtilityBtnStyled>
							<TrashCanIcon />
						</UtilityBtnStyled>
						<UtilityBtnStyled onClick={() => handleAlarmLayerVisible()}>
							<CloseIcon color="#242424" />
						</UtilityBtnStyled>
					</BtnContainerStyled>
				</TitleContainerStyled>
				<div>탭 영역...</div>
			</HeaderStyled>
			<ContentContainerStyled>
				<AlarmList />
				<NoAlarmDescStyled>알림 내역이 없습니다</NoAlarmDescStyled>
				<DescStyled>최근 7일 까지의 알림 내역을 제공 합니다</DescStyled>
			</ContentContainerStyled>
		</AlarmLayerStyled>
	) : null
}
