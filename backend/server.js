// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//MiddLewars
app.use(cors());
app.use(express.json());

//Rutas base (temporal)
app.get("/", (req, res) => {
    res.send("API del Task Manager Pro funcionando");
});

//Puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend ejecutandose en http://localhost:${PORT}`);
});