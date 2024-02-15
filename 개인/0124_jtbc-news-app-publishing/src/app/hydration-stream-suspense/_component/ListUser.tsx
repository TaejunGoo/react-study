'use client'

import Image from 'next/image'
import styled from '@emotion/styled'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import type { User } from '@/types'
import { Box } from '@/shared/components/demo/Box.styled'
import { Typography } from '@/shared/components/demo/Typography'

const ItemStyled = styled('div')(() => ({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr 1fr',
	gap: 20,
	'& > div': {
		border: '1px solid #ccc',
		textAlign: 'center',
		img: {
			width: 180,
			height: 180,
		},
	},
}))

async function getUsers() {
	const response = new Promise((res) => {
		setTimeout(res, 5000)
	}).then(async () =>
		fetch('https://jsonplaceholder.typicode.com/users').then(
			(res) => res.json() as Promise<User[]>,
		),
	)
	return response
}

export function ListUsers() {
	const [count, setCount] = useState(0)
	const { data } = useSuspenseQuery<User[], Error>({
		queryKey: ['@users/list'],
		queryFn: () => getUsers(),
		staleTime: 5 * 1000,
	})

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount((prev) => prev + 1)
		}, 100)

		return () => {
			clearInterval(intervalId)
		}
	})

	return (
		<>
			<p>{count}</p>
			<ItemStyled>
				{data.map((user) => (
					<Box key={user.id}>
						<Image
							src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
							alt={user.name}
							width={180}
							height={180}
						/>
						<Typography variant="h3">{user.name}</Typography>
					</Box>
				))}
			</ItemStyled>
		</>
	)
}
