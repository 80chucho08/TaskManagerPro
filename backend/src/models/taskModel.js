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
  const fields = [];
  const values = [];

  // Agrega solo los campos que vienen definidos
  if (task.title !== undefined) {
    fields.push("title = ?");
    values.push(task.title);
  }
  if (task.description !== undefined) {
    fields.push("description = ?");
    values.push(task.description);
  }
  if (task.completed !== undefined) {
    fields.push("completed = ?");
    values.push(task.completed);
  }

  // Si no hay campos, salir
  if (fields.length === 0) {
    return callback(new Error("No hay campos para actualizar"));
  }

  // Construir query dinámico
  const sql = `UPDATE tasks SET ${fields.join(", ")} WHERE id = ?`;
  values.push(id);

  db.query(sql, values, callback);
};


export const deleteTask = (id, callback) => {
  db.query("DELETE FROM tasks WHERE id=?", [id], callback);
};

