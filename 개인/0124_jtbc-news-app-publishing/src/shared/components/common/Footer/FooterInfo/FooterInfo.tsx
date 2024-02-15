'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import Grid from '../../Grid/Grid'

const FooterInfoLayoutStyled = styled('div')`
	.linkList {
		display: flex;
		gap: 16px;
		li a {
			font-size: 13px;
			color: #2d2f33;
			font-weight: 600;
		}
	}
	.defList {
		dt,
		dd {
			display: inline-block;
			font-size: 13px;
			font-weight: 500;
			color: #a8abb2;
		}
		dt {
			&::after {
				display: inline;
				content: ':';
			}
		}
	}
`

export default function FooterInfo() {
	return (
		<FooterInfoLayoutStyled>
			<ul className="linkList">
				<li>
					<Link href="/">기사배열기본원칙</Link>
				</li>
				<li>
					<Link href="/">청소년보호</Link>
				</li>
			</ul>
			<dl className="defList">
				<Grid container>
					<Grid xs={12} md={4}>
						<dt>대표이사</dt>
						<dd>이수영, 전진배</dd>
						<br />
						<dt>주소</dt>
						<dd>서울특별시 마포구 상암산로 38</dd>
						<br />
						<dt>연락처</dt>
						<dd>02-751-6000</dd>
					</Grid>
					<Grid xs={12} md={4}>
						<dt>사업자등록번호</dt>
						<dd>104-86-33995</dd>
						<br />
						<dt>통신판매업신고번호</dt>
						<dd>2017-서울마포-0896</dd>
					</Grid>
					<Grid xs={12} md={4}>
						<dt>기사배열기본원칙책임자</dt>
						<dd>김준술</dd>
						<br />
						<dt>청소년보호책임자</dt>
						<dd>방지현</dd>
					</Grid>
				</Grid>
			</dl>
		</FooterInfoLayoutStyled>
	)
}
