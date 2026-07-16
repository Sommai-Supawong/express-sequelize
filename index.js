import express from "express";
import { connectDB } from "./db.js";

const app = express();
const PORT = 5000;

// Middleware สำหรับอ่าน JSON จาก request body
app.use(express.json());

// เชื่อมต่อฐานข้อมูล
connectDB();

// ดักฟัง request
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});