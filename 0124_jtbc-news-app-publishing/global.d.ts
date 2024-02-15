declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	export default content
}
declare namespace NodeJS {
	interface ProcessEnv {
		SITE_URL: string
		TEST_VAR: string
		STYLESHEET_GLOBAL: string
		// # for Client
		NEXT_PUBLIC_TEST_VAR: string
		NEXT_PUBLIC_API_MOCKING: string
	}
}

/**
 * @description 배열 타입에서 원소타입을 추출
 *
 * @example
 * ```ts
 * // case 1
 *
 * type MyType = { a: 1, b: 2 }
 * type MyTypeList = MyType[]
 * type Result = ArrayElement<MyTypeList>   // result: MyType
 *
 * // case 2 - 1
 * const array = [1, 'a', '2', 'www']
 * type Result = ArrayElement<typeof array> // result: string | number
 *
 * // case 2 - 2
 * const array = [1, 'a', '2', 'www'] as const
 * type Result = ArrayElement<typeof array> // result: never, 사용할수 없는 타입니다.
 * ```
 */
type ArrayElement<T> = T extends (infer U)[] ? U : never

/**
 * @description
 * 0을 제외한 모든 숫자
 */
type NonZeroNumber = number & { __nonZeroNumber: never }

/**
 * @descriuption
 * 음수를 제외한 모든 숫자
 */
type NonNagativeNumber = number & { __nonNegativeNumber: never }

/**
 * @description
 * 0과 음수를 제외한 모든 숫자 (양수)
 */
type PositiveNumber = number & { __positiveNumber: never }

/**
 * @description
 * React의 `PropsWithChildren`은 children prop이 optional 이기 때문에 안전하다고 볼 수 없으므로 용도에 맞게 사용하길 기대하며 아래 타입을 전역 타입에 등록
 */
declare namespace React {
	type StrictPropsWithChildren<P = unknown> = P & { children: ReactNode | undefined }
}
