import "@/db/envConfig";
import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./db/schema.ts",
//   out: "./db/migrations",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!
//   }
// });
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "sqlite", // Instead of "postgresql"
  driver: "turso",   // Or "@libsql/client"
  dbCredentials: {
    url: process.env.SQLITE_URL,
    authToken: process.env.SQLITE_AUTH_TOKEN, // if required
  },
  verbose: true,
  strict: true,
});
