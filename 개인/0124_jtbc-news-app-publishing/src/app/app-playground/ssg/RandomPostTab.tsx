'use client'

import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Tab } from '@/shared/components/demo/Tab'

const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const RandomPostTabStyled = styled('div')<{ hasPost?: boolean }>`
	display: inline-flex;
	transition-property: opacity;
	transition-property: opacity;
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	opacity: ${({ hasPost }) => (hasPost ? 1 : 0)};
`

export function RandomPostTab({ path }: { path: string }) {
	const [post, setPost] = useState<null | { text: string; slug: string }>(null)

	useEffect(() => {
		const randomId = String(randomNumber(3, 100))
		setPost({ text: `Post ${randomId} (On Demand)`, slug: randomId })
	}, [])

	return (
		<RandomPostTabStyled>
			{post ? <Tab path={path} item={{ text: post.text, slug: post.slug }} /> : null}
		</RandomPostTabStyled>
	)
}
