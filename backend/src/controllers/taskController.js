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

export const updateTask = (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  updateTaskModel(id, updatedTask, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Tarea actualizada" });
  });
};

export const deleteTask = (req, res) => {
  const id = req.params.id;
  deleteTaskModel(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Tarea eliminada" });
  });
};
