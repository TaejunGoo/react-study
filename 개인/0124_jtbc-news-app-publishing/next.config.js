// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('@ducanh2912/next-pwa').default({
	dest: 'public',
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swcMinify: true,
	register: true,
	disable: process.env.NODE_ENV === 'development',
	workboxOptions: {
		disableDevLogs: true,
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		emotion: true,
	},
	experimental: {
		// forceSwcTransforms: true,
		scrollRestoration: true,
	},

	// CDN을 적극 활용함에 따라 거의 사용되지 않을 것으로 예상
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'robohash.org',
				port: '',
			},
		],
	},

	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		})

		return config
	},

	/**
	 * @description
	 * api의 도메인이 달라 여기서 우회처리
	 * Server-side 에서는 이방식이 적용이 안되므로 fetch 모듈 이 api를 호출하기 직전
	 * uri를 수동으로 변경하는 코드가 필요함
	 *
	 * @example
	 * axios: interceptor 활용
	 * fetch: fetch를 바로 호출하지 말고 한번 랩핑한 후 랩핑한 함수 내부에서 uri를 재가공 처리한 후 fetch를 호출하는 방식을 취해야 한다
	 *
	 * 결과 적으론 axios나 fetch나 처리되는 로직은 동일하나 코드를 작성하는 위치나 방법이 조금 상이함
	 */
	rewrites() {
		return [
			{
				source: '/api-example/:path*',
				destination: 'https://app-router-api.vercel.app/api/:path*',
			},
		]
	},
}

module.exports = withPWA(nextConfig)
