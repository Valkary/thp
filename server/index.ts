import { Elysia } from 'elysia'
import { db_connection } from './constants/db_conn';

await db_connection.connect();

new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/tables', async () => await db_connection.show_tables())
  .listen(3000)

console.log(`==> Elysia server running on http://localhost:${process.env.SERVER_PORT}`);
