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
    onEdit: (id: string, title: string) => void;
}

type Filter = 'all' | 'pending' | 'completed';
export interface TaskListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, title: string) => void;
    filter: Filter;
}