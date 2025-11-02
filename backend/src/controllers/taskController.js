import {
  getAllTasks,
  getTaskById,
  createTask as createTaskModel,
  updateTask as updateTaskModel, 
  deleteTask as deleteTaskModel
} from "../models/taskModel.js";



export const getTasks = (req, res) => {
  getAllTasks((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const getTask = (req, res) => {
  const id = req.params.id;
  getTaskById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

export const createTask = (req, res) => {
  const newTask = req.body;
  createTaskModel(newTask, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Tarea creada", id: result.insertId });
  });
};

// [USAR ESTA VERSIÓN CON LA FUNCIÓN DEL MODELO]
export const updateTask = (req, res) => { // No necesita ser 'async'
  const { id } = req.params;
  const updatedTask = req.body; // updatedTask contendrá solo los campos enviados (e.g., { completed: true })

  updateTaskModel(id, updatedTask, (err, result) => { // Llama a la función que actualiza dinámicamente
    if (err) {
      console.error("Error al actualizar tarea:", err);
      // Verifica si es el error de 'No hay campos para actualizar'
      if (err.message === "No hay campos para actualizar") {
        return res.status(400).json({ message: err.message });
      }
      return res.status(500).json({ message: "Error en el servidor" });
    }

    // result.affectedRows te dirá cuántas filas se actualizaron (si tu driver lo retorna)
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Tarea no encontrada o sin cambios" });
    }

    res.json({ message: "Tarea actualizada correctamente" });
  });
};



export const deleteTask = (req, res) => {
  const id = req.params.id;
  deleteTaskModel(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Tarea eliminada" });
  });
};
