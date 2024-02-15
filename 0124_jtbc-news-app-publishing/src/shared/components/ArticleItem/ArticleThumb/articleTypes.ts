import { Theme } from '@emotion/react'

export type SizeNumberByMedia = { [K in keyof Theme['mediaQueries']]?: number }
