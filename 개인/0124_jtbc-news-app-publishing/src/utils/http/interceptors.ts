import type { AxiosError, AxiosInstance } from 'axios'

const isServer = typeof document === 'undefined'

export const setInterceptors = (instance: AxiosInstance) => {
	instance.interceptors.request.use(
		(config) => {
			// config 내용을 참고해 전처리를 하거나 config 그자체를 변경해서 요청 처리

			if (isServer && config.url?.startsWith('/api-example')) {
				const originUrl = `${config.url.replace('/api-example', '')}` // copy
				// eslint-disable-next-line no-param-reassign
				config.url = `https://app-router-api.vercel.app/api${originUrl}`
			}

			return config
		},
		(requestError) => {
			// error 처리에 대한 json 규격이 있다면 generic에 추가
			const error = requestError as AxiosError

			return Promise.reject(error)
		},
	)
	instance.interceptors.response.use(
		// 응답값을 받은 후 응답값을 최종 전달 전에 전처리
		(response) => response,
		// error 처리에 대한 json 규격이 있다면 generic에 추가
		(responseError) => {
			const error = responseError as AxiosError

			/**
			 * @description
			 * Axios의 response 중 error가 발생하면 error 객체에서 response를 탐색할 수 있는데
			 * 그 값을 이용해서 추가적인 처리를 할수 있다.
			 */

			return Promise.reject(error)
		},
	)

	return instance
}
