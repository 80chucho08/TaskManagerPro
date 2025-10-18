import db from "../config/db.js" //importamos el objeto de conexion a la base de datos 

export const getAllTasks = (callback) => {
    db.query("SELECT * FROM tasks", callback);
};

export const getTaskById = (id, callback) => {
    db.query("SELECT * FROM tasks WHERE id = ?", [id], callback);
};

export const createTask = (task, callback) => {
    const { title, description } = task;
    db.query("INSERT INTO tasks (title, description) VALUES (?,?)", [title, description], callback);
};

export const updateTask = (id, task, callback) => {
  const { title, description, completed } = task;
  db.query("UPDATE tasks SET title=?, description=?, completed=? WHERE id=?", [title, description, completed, id], callback);
};

export const deleteTask = (id, callback) => {
  db.query("DELETE FROM tasks WHERE id=?", [id], callback);
};

