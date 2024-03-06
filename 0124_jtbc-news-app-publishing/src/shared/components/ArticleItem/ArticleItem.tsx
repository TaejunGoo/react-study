'use client'

import Link from 'next/link'
import ArticleBase from './ArticleBase/ArticleBase'
import ArticleInfo from './ArticleInfo/ArticleInfo'
import ArticleThumb from './ArticleThumb/ArticleThumb'
import { SizeNumberByMedia } from './ArticleThumb/articleTypes'
import { UseSizeRules } from './generateResponsiveStyles'

interface ArticleData {
	title: string
	view?: string
	writer?: string
	releaseTime?: string
	link: string
	titleInsert?: string
	titleInsertColor?: 'red' | 'blue'
	keyword?: string
	thumbSrc: string
	thumbType: 'picture' | 'video' | 'live'
	playTime?: string
}
const articleData: ArticleData = {
	title: '기사 제목',
	view: '2천회',
	writer: '둘리',
	releaseTime: '30분 전',
	link: '/',
	titleInsert: '단독',
	titleInsertColor: 'red',
	keyword: '22대 총선 레이스',
	thumbSrc: '/icon-256x256.png',
	thumbType: 'live',
	playTime: '01:30',
}

interface ArticleItemProps {
	horizontal?: boolean
	reverse?: boolean
	thumbWidth?: SizeNumberByMedia
	infoSize?: UseSizeRules
	thumbUiSize?: UseSizeRules
}

export default function ArticleItem({
	horizontal = false,
	reverse = false,
	thumbWidth,
	infoSize,
	thumbUiSize,
}: ArticleItemProps) {
	return (
		<Link href={articleData.link}>
			<ArticleBase horizontal={horizontal} reverse={reverse}>
				{articleData.thumbSrc && (
					<ArticleThumb
						thumbSrc={articleData.thumbSrc}
						thumbType={articleData.thumbType}
						thumbWidth={horizontal ? thumbWidth : undefined}
						thumbUiSize={thumbUiSize}
					/>
				)}
				<ArticleInfo
					// 기사 정보는 모두 string 형태로 가공되어야 합니다
					keyword={articleData.keyword}
					title={articleData.title}
					titleInsert={articleData.titleInsert}
					titleInsertColor={articleData.titleInsertColor}
					view={articleData.view}
					writer={articleData.writer}
					releaseTime={articleData.releaseTime}
					infoSize={infoSize}
				/>
			</ArticleBase>
		</Link>
	)
}
