import { Card, CardContent, Divider, Typography } from '@mui/material';
import TaskItem from './TaskItem';
import { Task } from '../types/task.types';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList = ({ tasks, onToggle, onDelete }: Props) => {
  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Tareas
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {tasks.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            No hay tareas para este proyecto aún.
          </Typography>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}

        <Divider sx={{ mt: 2 }} />

        <Typography variant="body2" color="text.secondary" mt={1}>
          {pendingCount} pendientes / {completedCount} completadas
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskList;