module.exports = {
	apps: [
		{
			name: 'jtbc-news-app-front',
			// script: 'ts-node --project tsconfig.json server/server.ts',
			script: 'yarn start',
			args: '--port 3000',
			cwd: './',
			exec_mode: 'cluster',
			instance: 2,
			autorestart: true,
			listen_timeout: 50000,
			kill_timeout: 5000,
			env: {
				PORT: 3000,
				NODE_ENV: 'development',
			},
			env_production: {
				PORT: 3000,
				NODE_ENV: 'production',
			},
		},
	],
}
