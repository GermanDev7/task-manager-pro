import { Box, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { useParams, Link } from 'react-router-dom';

import TaskForm from '../features/tasks/components/TaskForm';
import TaskList from '../features/tasks/components/TaskList';
import { addTask, deleteTask, toggleTask } from '../features/tasks/tasksSlice';

import { showSnackbar } from '../features/ui/uiSlice';
const ProjectTasksPage = () => {
    const { id: projectId } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();

    const { projects } = useSelector((state: RootState) => state.projects);
    const { tasks } = useSelector((state: RootState) => state.tasks);
    const project = projects.find(p => p.id === projectId);
    const projectTasks = tasks.filter(tasks => tasks.projectId === projectId);

    const handleAddTask = (title: string) => {
        dispatch(addTask({
            id: crypto.randomUUID(),
            title,
            completed: false,
            projectId: projectId!,
            createdAt: new Date().toISOString(),
        }));
        dispatch(showSnackbar('Tarea creada con exito'))
    };

    const handleToggleTask = (id: string) => {
        dispatch(toggleTask(id));
        dispatch(showSnackbar('Tarea completada'));
    };

    const handleDeleteTask = (id: string) => {
        dispatch(deleteTask(id));
        dispatch(showSnackbar('Tarea eliminada'));
    }

    if (!project) {
        return (
            <Box>
                <Typography variant="h5">Proyecto no encotrado</Typography>
                <Link to="/projects">
                    <Button>Volver a proyectos</Button>
                </Link>
            </Box>
        )
    }

    return (
        <Box>
            <Typography variant="h4" gutterBottom>{project.name}- Tareas</Typography>
            <Link to="/projects">
                <Button>Volver a proyectos</Button>
            </Link>

            <TaskForm onSubmit={handleAddTask} />

            <TaskList onDelete={handleDeleteTask} onToggle={handleToggleTask} tasks={projectTasks} />




        </Box>
    )
};

export default ProjectTasksPage;