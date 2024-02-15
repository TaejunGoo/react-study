export type Item = {
	name: string
	slug: string
	description?: string
}

export const demos: { name: string; items: Item[] }[] = [
	{
		name: 'Layouts',
		items: [
			{
				name: 'Nested Layouts',
				slug: 'layouts',
				description: '여러 route에서 공유되는 UI(중첩 레이아웃)',
			},
			{
				name: 'Grouped Layouts',
				slug: 'route-groups',
				description: 'URL 경로에 영향을 주지 않고 route 구성',
			},
			{
				name: 'Parallel Routes',
				slug: 'parallel-routes',
				description: '동일한 Lsyout으로 여러 페이지 렌더링',
			},
		],
	},
	{
		name: 'File Conventions',
		items: [
			{
				name: 'Loading',
				slug: 'loading',
				description: '의미있는 Loading UI',
			},
			{
				name: 'Error',
				slug: 'error-handling',
				description: 'Error 페이지 UI',
			},
			{
				name: 'Not Found',
				slug: 'not-found',
				description: 'NotFound 페이지 UI',
			},
		],
	},
	{
		name: 'Data Fetching',
		items: [
			{
				name: 'Streaming과 Suspense',
				slug: 'streaming',
				description: 'React Suspense를 활용하여 서버에서 streaming 데이터 fetch하기',
			},
			{
				name: 'Static Data',
				slug: 'ssg',
				description: '정적 페이지 생성',
			},
			{
				name: 'Dynamic Data',
				slug: 'ssr',
				description: '서버 렌더 페이지',
			},
			{
				name: 'Incremental Static Regeneration',
				slug: 'isr',
				description: 'Static & Dynamic 생성의 장점 활용',
			},
		],
	},
	{
		name: 'Components',
		items: [
			{
				name: 'Client Context',
				slug: 'context',
				description:
					'Server/Client Component 경계를 가로 지르는 Client Component 간의 컨텍스트 전달',
			},
		],
	},
	{
		name: 'Misc',
		items: [
			{
				name: 'Client Component Hooks',
				slug: 'hooks',
				description: 'Client Component에서 사용가능한 Hook',
			},
			{
				name: 'CSS and CSS-in-JS',
				slug: 'styling',
				description: 'Styling 방법(@emotion)',
			},
			{
				name: 'Code Snippets',
				slug: 'snippets',
				description: '활용도 높음 App router의 코드 스니펫',
			},
			{
				name: 'Modal',
				slug: 'use-modal',
				description: 'Modal을 구현하는 방법',
			},
		],
	},
]
