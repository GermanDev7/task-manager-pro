import { IconButton, ListItem, ListItemText } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { PropsProject } from "../types/projects.types";


const ProjectItem = ({ project, onDelete }: PropsProject) => {
    const navigate = useNavigate();

    return (
        <ListItem
            secondaryAction={
                <>
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