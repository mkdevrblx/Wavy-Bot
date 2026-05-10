import mongoose from "mongoose";
import { getConfig } from "./config.js";

globalThis.__WavyDashboardMongoose ??= undefined;

export async function connectDatabase() {
  const config = getConfig();
  if (!config.mongoUri) {
    throw new Error("MONGODB_URI is not configured for the dashboard.");
  }

  if (!globalThis.__WavhDashboardMongoose) {
    globalThis.__WavyDashboardMongoose = mongoose.connect(config.mongoUri);
  }

  return globalThis.__WavyDashboardMongoose;
}
