import List  from '@mui/material/List';
import ProjectItem from './ProjectItem';
import { PropsProjectList } from '../types/projects.types';

const ProjectList = ({ projects, onDelete }: PropsProjectList) => {
    return (
        <List>
            {projects.map(project =>
                <ProjectItem key={project.id} project={project} onDelete={onDelete} />
            )}
        </List>
    )
}

export default ProjectList;

