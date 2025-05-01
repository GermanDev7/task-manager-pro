import { Button, TextField } from "@mui/material";
import { useForm } from 'react-hook-form';
import { TaskFormProps } from "../types/task.types";


const TaskForm = ({ onSubmit }: TaskFormProps) => {
    const { register, handleSubmit, reset } = useForm<{ title: string }>();

    const submit = (data: { title: string }) => {
        onSubmit(data.title);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)} style={{ margin: '20px 0' }}>
            <TextField
                label="Nueva tarea"
                {...register('title', { required: true })}
                fullWidth
            />
            <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
                Agregar tarea
            </Button>
        </form>
    )

}


export default TaskForm;