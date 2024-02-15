import { http, HttpResponse } from 'msw'

const feed = [
	'/feed',
	(/* info */) =>
		HttpResponse.json({
			status: 'SUCCESS',
			data: {
				items: [
					{
						id: 1,
						description: 'some description #new #newer',
						likeCount: 0,
						commentCount: 0,
						feedImage: [],
						comment: [],
						tag: [
							{
								tagName: 'new',
							},
							{
								tagName: 'newer',
							},
						],
					},
					{
						id: 2,
						description: 'some description #dev #develop',
						likeCount: 12,
						commentCount: 1,
						feedImage: [],
						comment: [
							{
								userId: 5,
								feedId: 2,
								replyCount: 2,
								comment: '내용',
							},
						],
						tag: [
							{
								tagName: 'dev',
							},
							{
								tagName: 'develop',
							},
						],
					},
				],
				totalCount: 2,
			},
		}),
] as const

export const handlers = [http.get(...feed)]
