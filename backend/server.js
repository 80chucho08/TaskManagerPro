// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./src/routes/taskRoutes.js";
import db from "./src/config/db.js"; // ✅ ya hace la conexión

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//  Registrar rutas
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend ejecutandose en http://localhost:${PORT}`);
});
