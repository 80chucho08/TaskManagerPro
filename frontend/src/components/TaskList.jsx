
function TaskList({ tasks, onDelete, onChecked }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Lista de tareas</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No hay tareas registradas.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onChecked(task.id, task.completed)}
                    className="mr-2"
                  />
                  <span className={task.completed ? "text-green-500" : "text-red-500"}>
                    {task.completed ? 'Completado' : 'Pendiente'}
                  </span>
                </div>
                <button
                  onClick={() => onDelete(task.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;

