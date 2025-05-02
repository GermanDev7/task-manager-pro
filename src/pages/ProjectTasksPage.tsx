import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { useParams, Link } from 'react-router-dom';

import { lazy, Suspense } from 'react'
const TaskForm = lazy(() => import('../features/tasks/components/TaskForm'));
const TaskList = lazy(() => import('../features/tasks/components/TaskList'));
import { addTask, deleteTask, editTask, toggleTask } from '../features/tasks/tasksSlice';

import { showSnackbar } from '../features/ui/uiSlice';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
const ProjectTasksPage = () => {
    const { id: projectId } = useParams<{ id: string }>();
    const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
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

    const handleEditTask = (id: string, title: string) => {
        dispatch(editTask({ id, title }));
        dispatch(showSnackbar('Tarea actualizad'));
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
            <Suspense fallback={<CircularProgress />}>
                <TaskForm onSubmit={handleAddTask} />
                <Box sx={{ mb: 2 }}>
                    <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => setFilter('all')} sx={{ mr: 1 }}>
                        Todas
                    </Button>
                    <Button variant={filter === 'pending' ? 'contained' : 'outlined'} onClick={() => setFilter('pending')} sx={{ mr: 1 }}>
                        Pendientes
                    </Button>
                    <Button variant={filter === 'completed' ? 'contained' : 'outlined'} onClick={() => setFilter('completed')}>
                        Completadas
                    </Button>
                </Box>
                <TaskList onDelete={handleDeleteTask} onToggle={handleToggleTask} onEdit={handleEditTask} tasks={projectTasks} filter={filter} />
            </Suspense>

        </Box>
    )
};

export default ProjectTasksPage;