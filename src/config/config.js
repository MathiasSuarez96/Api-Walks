import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT ?? 5000,
  nodeEnv: process.env.NODE_ENV ?? "development",
  jwtSecret: process.env.JWT_SECRET ?? "devsecret", 
  dbUri: process.env.DB_URI ?? "mongodb://localhost:27017/backend-entregable"
};