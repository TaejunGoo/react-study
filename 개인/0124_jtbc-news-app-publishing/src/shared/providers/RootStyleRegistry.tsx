'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'
import { CacheProvider, Global, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { theme, globalStyle } from '@/utils/theme'

type RootStyleRegistryProps = React.PropsWithChildren

export function RootStyleRegistry({ children }: RootStyleRegistryProps) {
	const [{ cache: cached, flush: flushed }] = useState(() => {
		const cache = createCache({ key: 'my' })
		cache.compat = true
		const prevInsert = cache.insert
		let inserted: string[] = []
		cache.insert = (...args) => {
			const serialized = args[1]
			if (cache.inserted[serialized.name] === undefined) {
				inserted.push(serialized.name)
			}
			return prevInsert(...args)
		}
		const flush = () => {
			const prevInserted = inserted
			inserted = []
			return prevInserted
		}
		return { cache, flush }
	})

	useServerInsertedHTML(() => {
		const names = flushed()
		if (names.length === 0) return null
		let styles = ''

		names.forEach((name) => {
			styles += cached.inserted[name]
		})

		return (
			<style
				data-emotion={`${cached.key} ${names.join(' ')}`}
				dangerouslySetInnerHTML={{ __html: styles }}
			/>
		)
	})

	return (
		<CacheProvider value={cached}>
			<Global styles={globalStyle} key="global-style" />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</CacheProvider>
	)
}
