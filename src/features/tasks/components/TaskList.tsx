import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TaskItem from './TaskItem';
import { TaskListProps } from '../types/task.types';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList, ListChildComponentProps } from 'react-window';


const TaskList = ({ tasks, onToggle, onDelete, onEdit, filter }: TaskListProps) => {

  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.length - completedCount;
  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const Row = ({ index, style }: ListChildComponentProps) => {
    if (index < filteredTasks.length) {
      const task = filteredTasks[index];
      return (
        <ListItem style={style} disableGutters>
          <TaskItem task={task} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
        </ListItem>
      );
    } else {
      // Última fila: mostrar el divider y el resumen
      return (
        <ListItem style={style} disableGutters>
          <div style={{ width: '100%' }}>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" color="text.secondary" mt={1}>
              {pendingCount} pendientes / {completedCount} completadas
            </Typography>
          </div>
        </ListItem>
      );
    }
  };
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Tareas
        </Typography>
  
        <Divider sx={{ mb: 2 }} />
  
        {filteredTasks.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            No hay tareas para este filtro aún.
          </Typography>
        ) : (
          <FixedSizeList
            height={400}
            itemCount={filteredTasks.length + 1}  // 👈 sumamos 1 fila
            itemSize={80}  // 👈 ajusta si el último item es más alto
            width="100%"
          >
            {Row}
          </FixedSizeList>
        )}
      </CardContent>
    </Card>
  );
}

export default TaskList;