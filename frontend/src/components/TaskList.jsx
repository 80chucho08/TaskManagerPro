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
              <input type="checkbox" onChange={() => onChecked(task.id)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;

