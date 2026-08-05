import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "4.4.8.8"]);

export const connDB = async (req, res) =>{
    const urlDB = process.env.DATABASE_URL;
    try {
        await mongoose.connect(urlDB);
        console.log("Database Connected Successfully!");
    } catch (error) {
        console.log("Failed to Connect DB : ", error.message);
    }
}