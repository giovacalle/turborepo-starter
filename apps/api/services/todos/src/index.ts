import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { apiV1 } from '@/v1';

const app = new Hono().basePath('/api');

app.notFound(c => c.json({ message: 'Not Found' }, 404));

app.route('/', apiV1);

serve({
	port: Number(process.env.PORT),
	fetch: app.fetch
});
