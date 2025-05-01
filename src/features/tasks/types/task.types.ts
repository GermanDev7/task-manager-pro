export interface Task {
    id: string;
    title: string;
    completed: boolean;
    projectId: string;
    createdAt: string
}

export interface TasksState {
    tasks: Task[];
}

export interface TaskFormProps {
    onSubmit: (title: string) => void;
}

export interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export interface TaskListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}