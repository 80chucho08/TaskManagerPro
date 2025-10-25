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
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Nueva tarea</h3>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "200px" }}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "250px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;
