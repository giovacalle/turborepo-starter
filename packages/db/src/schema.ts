import { boolean, index, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// tables
export const todosTable = pgTable(
	'todos',
	{
		id: serial('id').primaryKey(),
		title: text('title').notNull(),
		description: text('description'),
		completed: boolean('completed').notNull().default(false),
		created_at: timestamp('created_at').defaultNow().notNull(),
		updated_at: timestamp('updated_at')
	},
	table => [index('todo_completed_index').on(table.completed)]
);
