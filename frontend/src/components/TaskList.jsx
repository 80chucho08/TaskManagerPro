import { useEffect, useState } from 'react';
import api from '../api/axiosConfig';


function TaskList() {
    const [task, setTasks] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await api.get('/tasks');
                setTasks(res.data);
            } catch (error) {
                console.error('Error al obtener tareas: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    if (loading) return <p>Cargando tareas...</p>

    return (
        <div>
            <h2>Lista de Tareas</h2>
            {task.length === 0 ? (
                <p>No hay tareas disponibles.</p>
            ) : (
                <ul>
                    {task.map((task) => (
                        <li key={task.id}>
                            {task.title} - {task.completed ? 'Completada' : 'Pendiente'}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TaskList;