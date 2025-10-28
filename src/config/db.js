import mongoose from "mongoose";
import {config} from "./config.js";

export async function connectDB()  {
try {
    await mongoose.connect(config.dbUri);
    console.log("✅ Conectado a MongoDB");
} catch (error)
 {
     console.log("❌ Error al conectar MongoDB:" , error.message);
     process.exit(1);
}
}