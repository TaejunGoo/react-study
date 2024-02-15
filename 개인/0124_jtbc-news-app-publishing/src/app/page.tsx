import Grid from '@/shared/components/common/Grid/Grid'
import Checkbox from '@/shared/components/common/Checkbox/Checkbox'
import { Box } from '@/shared/components/demo/Box.styled'
import Radio from '@/shared/components/common/Radio/Radio'
import Switch from '@/shared/components/common/Switch/Switch'
import ArticleItem from '@/shared/components/ArticleItem/ArticleItem'

export default function Page() {
	return (
		<>
			<Grid container>
				<Grid xs={12}>
					<div style={{ border: '1px solid #ccc' }}>
						<Box>
							<Checkbox label="hi" id="testChk1" defaultChecked />
							<Checkbox label="hi2" id="testChk2" disabled />
						</Box>
					</div>
				</Grid>
				<Grid xs={6}>
					<div style={{ border: '1px solid #ccc' }}>
						<Radio name="radio1" id="radio1_1" label="라디오1" />
						<Radio name="radio1" id="radio1_2" label="라디오2" />
					</div>
				</Grid>
				<Grid xs={6}>
					<div style={{ border: '1px solid #ccc' }}>
						<Switch label="스위치1" />
						<Switch label="스위치2" defaultChecked />
					</div>
				</Grid>
			</Grid>
			<Grid container allSpacing={{ xs: 10 }}>
				<Grid xs={6} md={3}>
					<div style={{ border: '1px solid #ccc' }}>
						<ArticleItem
							infoSize={{ xs: 'md', md: 'sm' }}
							thumbUiSize={{ xs: 'md', md: 'sm' }}
						/>
					</div>
				</Grid>
				<Grid xs={6} md={3}>
					<div style={{ border: '1px solid #ccc' }}>
						<ArticleItem
							infoSize={{ xs: 'md', md: 'sm' }}
							thumbUiSize={{ xs: 'md', md: 'sm' }}
						/>
					</div>
				</Grid>
				<Grid xs={6} md={3}>
					<div style={{ border: '1px solid #ccc' }}>
						<ArticleItem
							infoSize={{ xs: 'md', md: 'sm' }}
							thumbUiSize={{ xs: 'md', md: 'sm' }}
						/>
					</div>
				</Grid>
				<Grid xs={6} md={3}>
					<div style={{ border: '1px solid #ccc' }}>
						<ArticleItem
							infoSize={{ xs: 'md', md: 'sm' }}
							thumbUiSize={{ xs: 'md', md: 'sm' }}
						/>
					</div>
				</Grid>
			</Grid>
			<Grid container allSpacing={{ xs: 10 }}>
				<Grid xs={6} md={6}>
					<div style={{ border: '1px solid #ccc' }}>
						<ArticleItem infoSize={{ xs: 'lg' }} thumbUiSize={{ xs: 'lg' }} />
					</div>
				</Grid>
				<Grid xs={6} md={6}>
					<div style={{ border: '1px solid #ccc' }}>
						<ArticleItem infoSize={{ xs: 'lg' }} thumbUiSize={{ xs: 'lg' }} />
					</div>
				</Grid>
			</Grid>
			<Grid container allSpacing={{ xs: 10 }}>
				<Grid xs={12} md={6}>
					<div style={{ border: '1px solid #ccc' }}>
						<ArticleItem
							infoSize={{ xs: 'lg', md: 'md' }}
							thumbUiSize={{ xs: 'lg', md: 'md' }}
							thumbWidth={{ xs: 100, md: 200 }}
							horizontal
						/>
					</div>
				</Grid>
				<Grid xs={12} md={6}>
					<div style={{ border: '1px solid #ccc' }}>
						<ArticleItem
							infoSize={{ xs: 'lg', md: 'md' }}
							thumbUiSize={{ xs: 'lg', md: 'md' }}
							thumbWidth={{ xs: 100, md: 200 }}
							horizontal
						/>
					</div>
				</Grid>
			</Grid>
		</>
	)
}
