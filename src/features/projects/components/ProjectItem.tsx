import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Tooltip from "@mui/material/Tooltip";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';
import { PropsProject } from "../types/projects.types";


const ProjectItem = ({ project, onDelete }: PropsProject) => {
    const navigate = useNavigate();

    return (
        <ListItem
            secondaryAction={
                <>
                    <Tooltip title="Ver tareas">
                        <IconButton onClick={() => navigate(`/projects/${project.id}/tasks`)}>
                            <AssignmentIcon />
                        </IconButton>
                    </Tooltip>
                    <IconButton onClick={() => navigate(`/projects/${project.id}`)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete(project.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            }>
            <ListItemText
                primary={project.name}
                secondary={project.description}
            />
        </ListItem>
    )
}

export default ProjectItem