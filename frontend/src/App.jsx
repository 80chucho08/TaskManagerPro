import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useState, useEffect } from 'react';
import api from './api/axiosConfig';


function App() {
  const [task, setTasks ] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error al obtener tareas: ', error);
    }
  };
  
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks([...task, newTask]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Task Manager Pro</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={task} />
    </div>
  );
}

export default App;
