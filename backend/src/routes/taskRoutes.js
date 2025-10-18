import express from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

// Ruta base: /api/tasks
router.get("/", getTasks);       // Obtener todas las tareas
router.get("/:id", getTask);     // Obtener una tarea por ID
router.post("/", createTask);    // Crear nueva tarea
router.put("/:id", updateTask);  // Actualizar una tarea
router.delete("/:id", deleteTask); // Eliminar una tarea

export default router;
