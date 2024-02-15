'use client'

import Link from 'next/link'
import styles from './styles.module.css'
import { Box } from '@/shared/components/demo/Box.styled'

export default function Page() {
	const items = Array(100)
		.fill('')
		.map((v, i) => i + 1)

	return (
		<Box as="main">
			<Box>
				{items
					.map((num, i) => ({ id: i, num }))
					.map((item) => {
						return (
							<Box key={item.id} className={styles.wrap}>
								<Link href={`/app-playground/use-modal/items/${item.num}`}>
									open {item.num} modal
								</Link>
							</Box>
						)
					})}
			</Box>
		</Box>
	)
}
