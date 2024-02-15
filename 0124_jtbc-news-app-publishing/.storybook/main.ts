import { join, dirname, resolve } from 'path'
import type { StorybookConfig } from '@storybook/nextjs'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-interactions'),
	],
	framework: {
		name: getAbsolutePath('@storybook/nextjs'),
		options: {
			builder: {
				useSWC: true,
			},
		},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['../public'],
	async webpackFinal(config, options) {
		const imageRule = config.module?.rules?.find((rule) => {
			const test = (rule as { test: RegExp }).test

			if (!test) {
				return false
			}

			return test.test('.svg')
		}) as { [key: string]: any }

		imageRule.exclude = /\.svg$/

		config.module?.rules?.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		config.resolve?.plugins?.push(new TsconfigPathsPlugin({}))

		return config
	},
}
export default config
