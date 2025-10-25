function TaskList({ tasks }) {
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;

