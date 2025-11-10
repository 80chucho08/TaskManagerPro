import { useState } from "react";
import api from "../api/axiosConfig";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!title.trim()) {
      alert("El título no puede estar vacío");
      return;
    }

    try {
      const res = await api.post("/tasks", {
        title,
        description,
        completed: false,
      });

      // Limpiar formulario
      setTitle("");
      setDescription("");

      // Avisar al componente padre (App.jsx)
      onTaskAdded(res.data);
    } catch (error) {
      console.error("Error al crear tarea:", error);
      alert("Error al crear la tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Nueva Tarea</h2>
      <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Título"
          value={title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 w-full md:w-1/4"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description ?? ""}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 w-full md:w-1/2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Agregar
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
