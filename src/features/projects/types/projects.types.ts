export interface Project {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface ProjectsState {
    projects: Project[]
}

export interface ProjectFormInputs {
    name: string;
    description: string
}

export interface PropsProject {
    project: Project;
    onDelete: (id: string) => void;
}

export interface PropsProjectList {
    projects: Project[];
    onDelete: (id: string) => void;
}