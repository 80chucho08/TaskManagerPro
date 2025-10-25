import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import api from "./api/axiosConfig";

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas al iniciar
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Agregar nueva tarea sin recargar
  const handleTaskAdded = async (newTask) => {
  try {
    // Traer toda la lista actualizada desde el backend
    const res = await api.get("/tasks");
    setTasks(res.data);
  } catch (error) {
    console.error("Error al actualizar tareas:", error);
  }
};


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Task Manager Pro </h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;


