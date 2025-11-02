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

  const handleDeleteTask = async (taskId) => {
    // Mostrar mensaje de confirmación
    const confirmar = window.confirm("¿Estás seguro de que quieres eliminar esta tarea?");

    // Si el usuario cancela, salimos de la función
    if (!confirmar) return;
    try {
      //envio de la peticion al backend con el aid de la tarea
      await api.delete(`/tasks/${taskId}`);
      // actualiza  el estado local para que la tarea desaparesca
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

      console.log(`Tarea con id  ${taskId} eliminada`);
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
      alert("Error al eliminar la tarea");
    }
  }

  const handleCheckCompleted = async (taskId, currentStatus) => {
    try {
      const updatedStatus = !currentStatus; // alterna el valor
      await api.put(`/tasks/${taskId}`, { completed: updatedStatus });

      // Actualiza el estado local sin volver a cargar toda la lista
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: updatedStatus } : task
        )
      );

      console.log(`Tarea con id ${taskId} actualizada a ${updatedStatus ? "Completada" : "Pendiente"}`);
    } catch (error) {
      console.error("Error al actualizar el estado de la tarea:", error);
    }
  };



  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Task Manager Pro </h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onChecked={handleCheckCompleted} />
    </div>
  );
}

export default App;


