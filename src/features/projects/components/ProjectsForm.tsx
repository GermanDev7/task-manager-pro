import { Box, Button, TextField } from "@mui/material";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { addProject } from "../projectsSlice";
import { ProjectFormInputs } from "../types/projects.types";
import { showSnackbar } from "../../ui/uiSlice";

const ProjectForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProjectFormInputs>();

    const onSubmit = (data: ProjectFormInputs) => {
        dispatch(addProject({
            id: crypto.randomUUID(),
            name: data.name,
            description: data.description,
            createdAt: new Date().toISOString()
        }));
        dispatch(showSnackbar('Proyecto creado exitosamente'));
        reset();
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}
        >
            <TextField
                label="Nombre del proyecto"
                {...register('name', { required: 'El nombre es obligatorio' })}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
            />
            <TextField
                label="Descripcion"
                {...register('description', { required: 'La descripcion es obligatoria' })}
                error={!!errors.description}
                helperText={errors.description?.message}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Crear proyecto
            </Button>
        </Box>
    )


}

export default ProjectForm;
