import * as Task from "../models/taskModel.js";

export const getTasks = (req, res) => {
  Task.getAllTasks((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const getTask = (req, res) => {
  const id = req.params.id;
  Task.getTaskById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

export const createTask = (req, res) => {
  const newTask = req.body;
  Task.createTask(newTask, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Tarea creada", id: result.insertId });
  });
};

export const updateTask = (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  Task.updateTask(id, updatedTask, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Tarea actualizada" });
  });
};

export const deleteTask = (req, res) => {
  const id = req.params.id;
  Task.deleteTask(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Tarea eliminada" });
  });
};
