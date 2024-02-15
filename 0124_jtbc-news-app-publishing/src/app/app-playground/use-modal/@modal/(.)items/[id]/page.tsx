'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styles from './styles.module.css'
import { Box } from '@/shared/components/demo/Box.styled'

export default function Page({ params }: { params: { id: string } }) {
	const router = useRouter()
	const { id } = params

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	return (
		<Box className={styles.backdrop}>
			<Box className={styles.modal}>
				<Box className={styles.header} />
				<Box className={styles.body}>
					<Box>modal</Box>
					<Box>{id}</Box>
				</Box>
				<Box className={styles.footer}>
					<button type="button" className={styles.button} onClick={() => router.back()}>
						확인
					</button>
				</Box>
			</Box>
		</Box>
	)
}
