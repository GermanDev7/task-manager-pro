import ListItem  from '@mui/material/ListItem'; 
import ListItemText from '@mui/material/ListItemText'; 
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TextField  from "@mui/material/TextField";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { TaskItemProps } from "../types/task.types";
import { useState } from "react";
const TaskItem = ({ task, onToggle, onDelete, onEdit }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleSave = () => {
        onEdit(task.id, newTitle);
        setIsEditing(false);
    }

    return (
        <ListItem
            secondaryAction={
                <>
                    {isEditing ? (
                        <IconButton edge="end" aria-label="save" onClick={handleSave}>
                            <SaveIcon />
                        </IconButton>
                    ) : (
                        <IconButton edge="end" aria-label="edit" onClick={() => setIsEditing(true)}>
                            <EditIcon />
                        </IconButton>
                    )}
                    <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>

            }
        >
            <Checkbox
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            {isEditing ? (
                <TextField
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    variant="standard"
                    fullWidth
                />
            ) : (
                <ListItemText
                    primary={task.title}
                    sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                />
            )}
        </ListItem>
    );
};

export default TaskItem;