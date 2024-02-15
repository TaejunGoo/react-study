'use client'

import styled from '@emotion/styled'
import Link from 'next/link'

const NoticeLayoutStyled = styled('div')`
	border: 1px solid #eff3f9;
	padding: 16px 20px;
`

const NoticeItemStyled = styled('div')`
	display: flex;
	& > .category {
		width: 120px;
		font-size: 16px;
		color: #5f646d;
		font-weight: 700;
		flex-shrink: 0;
	}
	& > .title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex-grow: 1;
		font-size: 16px;
		color: #878d99;
		font-weight: 600;
	}
	& > .date {
		font-size: 14px;
		color: #878d99;
		font-weight: 500;
		flex-shrink: 0;
	}
`

export default function Notice() {
	return (
		<NoticeLayoutStyled>
			<NoticeItemStyled>
				<div className="category">정정/반론</div>
				<div className="title">
					<Link href="/">
						&lt;"직접 얘기나 들어보자"…‘김포 서울 편입' 주민 설명회&gt; 관련
					</Link>
				</div>
				<div className="date">5시간 전</div>
			</NoticeItemStyled>
		</NoticeLayoutStyled>
	)
}
