import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import { Project } from "../types/projects.types";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useForm } from 'react-hook-form';
import { updateProject } from "../projectsSlice";

const ProjectDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const project = useSelector((state: RootState) =>
        state.projects.projects.find((p) => p.id === id));

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Project>({ defaultValues: project });

    if (!project) {
        return <Typography variant="h6"> Proyecto no encontrado</Typography>;
    }

    const onSubmit = (data: Project) => {
        dispatch(updateProject({ ...project, ...data }));
        navigate('/projects');
    };

    return (
        <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>Editar Proyecto</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Nombre"
                    {...register('name', { required: 'El nombre es obligatorio' })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Descripcion"
                    {...register('description', { required: "La descripcion es obligatoria" })}
                    error={!!errors.description}
                    helperText={errors.name?.message}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Guardar cambios
                </Button>
            </form>
        </Box>
    )
}

export default ProjectDetailsPage;