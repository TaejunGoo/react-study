import Grid from '@/shared/components/common/Grid/Grid'
import Switch from '@/shared/components/common/Switch/Switch'
import SVGcheckbox from '@/shared/components/common/SVGcheckbox/SVGcheckbox'
import SVGradio from '@/shared/components/common/SVGradio/SVGradio'
import ArticleItem from '@/shared/components/ArticleItem/ArticleItem'

export default function Page() {
	return (
		<Grid container allSpacing={{ xs: 20 }}>
			<Grid xs={12} md={6} lg={3} xl={12}>
				<ArticleItem horizontal reverse thumbWidth={{ xs: 120 }} />
			</Grid>
			<Grid xs={6}>
				<SVGcheckbox label="체크박스" />
				<SVGcheckbox label="체크박스" defaultChecked />
				<SVGcheckbox label="체크박스" disabled />
			</Grid>
			<Grid xs={6}>
				<SVGradio label="라디오1" name="radio01" defaultChecked />
				<SVGradio label="라디오2" name="radio01" disabled />
				<SVGradio label="라디오3" name="radio01" />
			</Grid>
			<Grid xs={6}>
				<Switch label="스위치" />
				<Switch label="스위치" disabled />
			</Grid>
		</Grid>
	)
}
