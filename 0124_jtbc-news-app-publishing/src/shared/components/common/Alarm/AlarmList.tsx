'use client'

import styled from '@emotion/styled'
import AlarmItem from './AlarmItem'

const AlarmListStyled = styled('ul')``

export default function AlarmList() {
	return (
		<AlarmListStyled>
			<AlarmItem newItem />
			<AlarmItem newItem />
			<AlarmItem newItem />
			<AlarmItem newItem />
			<AlarmItem />
			<AlarmItem />
			<AlarmItem />
			<AlarmItem />
			<AlarmItem />
			<AlarmItem />
		</AlarmListStyled>
	)
}
