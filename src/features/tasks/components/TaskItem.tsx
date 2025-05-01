import { ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskItemProps } from "../types/task.types";

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <ListItemText
                primary={task.title}
                sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
        </ListItem>
    );
};

export default TaskItem;