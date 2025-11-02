import { useState } from 'react';


function TaskList({ tasks, onDelete, onChecked }) {
  return (
    <div>
      <h2>Lista de tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} — {task.completed ? "Completado" : "Pendiente"}
              <button onClick={() => onDelete(task.id)} >Eliminar</button>
              <input
                type="checkbox"
                checked={task.completed === 1 || task.completed === true}
                onChange={() => onChecked(task.id, task.completed)}
              />

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;

