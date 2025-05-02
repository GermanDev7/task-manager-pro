import { lazy, Suspense } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ProjectForm = lazy(() => import("../features/projects/components/ProjectsForm"));
const ProjectList = lazy(() => import("../features/projects/components/ProjectList"));
import { useDispatch } from "react-redux";
import { deleteProject } from "../features/projects/projectsSlice";
import { AppDispatch } from "../store/store";
import { showSnackbar } from "../features/ui/uiSlice";
import ConfirmDialog from "../components/ConfirmDialog";
import { useState } from "react";
import { CircularProgress } from '@mui/material';

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
            <Suspense fallback={<CircularProgress />}>
                <ProjectForm />
                <ProjectList projects={projects} onDelete={handleDelete} />
            </Suspense>

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