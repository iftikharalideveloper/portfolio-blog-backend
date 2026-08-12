import mongoose from "mongoose";

export const connDB = async () => {
  const urlDB = process.env.DATABASE_URL;

  if (!urlDB) {
    throw new Error("DATABASE_URL is not defined");
  }

  try {
    await mongoose.connect(urlDB);

    console.log("Database Connected Successfully!");
  } catch (error) {
    console.error("Failed to Connect DB:", error.message);

    throw error;
  }
};