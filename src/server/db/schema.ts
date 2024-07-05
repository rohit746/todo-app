import { sql } from "drizzle-orm";
import {
  boolean,
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `todo-app_${name}`);

export const todos = createTable(
  "todo",
  {
    id: serial("id").primaryKey(),
    completed: boolean("completed").notNull(),
    todo: varchar("todo", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.todo),
  }),
);
