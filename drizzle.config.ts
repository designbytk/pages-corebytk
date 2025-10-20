import "@/db/envConfig";

export default {
  driver: "pg",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!
  }
};

