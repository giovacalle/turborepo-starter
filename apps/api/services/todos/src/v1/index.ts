import { Hono } from 'hono';
import { openAPISpecs } from 'hono-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { getRouter } from '@/v1/routes/get';
import { postRouter } from '@/v1/routes/post';
import { patchRouter } from '@/v1/routes/patch';
import { deleteRouter } from '@/v1/routes/delete';

export const apiV1 = new Hono().basePath('/v1');

apiV1
	.get(
		'/openapi',
		openAPISpecs(apiV1, {
			documentation: {
				info: {
					title: 'Todos API',
					version: '1.0.0',
					description: 'API for managing todos'
				},
				servers: [
					{
						url: '/api'
					}
				]
			}
		})
	)
	.get('/docs', swaggerUI({ url: '/api/v1/openapi' }))
	.route('/todos', getRouter)
	.route('/todos', postRouter)
	.route('/todos', patchRouter)
	.route('/todos', deleteRouter);
