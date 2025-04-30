import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Box, Typography } from "@mui/material";
import ProjectForm from "../features/projects/components/ProjectsForm";
import ProjectList from "../features/projects/components/ProjectList";
import { useDispatch } from "react-redux";
import { deleteProject } from "../features/projects/projectsSlice";
import { AppDispatch } from "../store/store";
import { showSnackbar } from "../features/ui/uiSlice";
import ConfirmDialog from "../components/ConfirmDialog";
import { useState } from "react";

const ProjectsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { projects } = useSelector((state: RootState) => state.projects);

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null)

    const handleDelete = (id: string) => {
        setSelectedId(id);
        setConfirmOpen(true);
    }

    const confirmDelete = () => {
        if (selectedId) {
            dispatch(deleteProject(selectedId));
            dispatch(showSnackbar('Proyecto eliminado'));
        }
        setConfirmOpen(false);
        setSelectedId(null)
    }
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Proyectos
            </Typography>
            <ProjectForm />
            <ProjectList projects={projects} onDelete={handleDelete} />
            <ConfirmDialog
                open={confirmOpen}
                title="¿Eliminar proyecto"
                description="Esta accion no se puede deshacer."
                onClose={() => setConfirmOpen(false)}
                onConfirm={confirmDelete} />
        </Box>
    )
}

export default ProjectsPage;