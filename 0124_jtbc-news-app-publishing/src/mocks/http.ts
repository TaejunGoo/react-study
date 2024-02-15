import { createMiddleware } from '@mswjs/http-middleware'
// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express'
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors'
import { handlers } from './handlers'

const { log } = console
const app = express()

// env 추가 --> MOCK_API_PORT
const port = 9090

app.use(
	cors({
		origin: 'http://localhost:3000',
		optionsSuccessStatus: 200,
		credentials: true,
	}),
)
app.use(express.json())
app.use(createMiddleware(...handlers))
app.listen(port, () => log(`Mock server is running on port ${port}`))
