import Checkbox from '@/shared/components/common/Checkbox/Checkbox'
import Grid from '@/shared/components/common/Grid/Grid'
import Radio from '@/shared/components/common/Radio/Radio'
import Switch from '@/shared/components/common/Switch/Switch'
import { Box } from '@/shared/components/demo/Box.styled'

export default function Page() {
	return (
		<div>
			<Grid allSpacing={{ xs: 30 }} rowSpacing={{ xs: 50 }} container>
				<Grid xs={12}>
					<div style={{ background: '#fff' }}>
						<Box>
							<Checkbox label="hi" id="testChk1" defaultChecked />
							<Checkbox label="hi2" id="testChk2" />
						</Box>
					</div>
				</Grid>
				<Grid xs={9}>
					<div style={{ background: '#fff' }}>
						<Radio name="radio1" id="radio1_1" label="라디오1" />
						<Radio name="radio1" id="radio1_2" label="라디오2" />
					</div>
				</Grid>
				<Grid>
					<div style={{ background: '#fff' }}>
						<Switch label="스위치1" />
					</div>
				</Grid>
				<Grid xs={12}>
					<div style={{ background: '#fff' }}>중간</div>
				</Grid>
			</Grid>
		</div>
	)
}
