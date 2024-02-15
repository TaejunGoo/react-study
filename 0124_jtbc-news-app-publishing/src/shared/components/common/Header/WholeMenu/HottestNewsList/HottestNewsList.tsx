import styled from '@emotion/styled'
import Link from 'next/link'

const NewsListLayoutStyled = styled('div')``

const NewsListStyled = styled('ul')``

const NewsItemStyled = styled('li')``

export default function HottestNewsList() {
	return (
		<NewsListLayoutStyled>
			<NewsListStyled>
				<NewsItemStyled>
					<span className="num">1</span>
					<Link href="/" className="title">
						[단독] &apos;조악한 구현&apos; 정조대왕함 AR, 알고보니 &apos;1억6천만원짜리’
					</Link>
				</NewsItemStyled>
				<NewsItemStyled>
					<span className="num">2</span>
					<Link href="/" className="title">
						[단독] &apos;조악한 구현&apos; 정조대왕함 AR, 알고보니 &apos;1억6천만원짜리’
					</Link>
				</NewsItemStyled>
				<NewsItemStyled>
					<span className="num">3</span>
					<Link href="/" className="title">
						[단독] &apos;조악한 구현&apos; 정조대왕함 AR, 알고보니 &apos;1억6천만원짜리’
					</Link>
				</NewsItemStyled>
				<NewsItemStyled>
					<span className="num">4</span>
					<Link href="/" className="title">
						[단독] &apos;조악한 구현&apos; 정조대왕함 AR, 알고보니 &apos;1억6천만원짜리’
					</Link>
				</NewsItemStyled>
				<NewsItemStyled>
					<span className="num">5</span>
					<Link href="/" className="title">
						[단독] &apos;조악한 구현&apos; 정조대왕함 AR, 알고보니 &apos;1억6천만원짜리’
					</Link>
				</NewsItemStyled>
			</NewsListStyled>
		</NewsListLayoutStyled>
	)
}
