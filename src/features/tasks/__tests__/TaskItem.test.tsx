import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/task.types';

describe('TaskItem', () => {
    const task: Task = {
        id: '1',
        title: 'Test task',
        completed: false,
        projectId: 'p1',
        createdAt: 'now',
    };

    const onToggle = jest.fn();
    const onDelete = jest.fn();
    const onEdit = jest.fn();

    it('renders the task title', () => {
        render(<TaskItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />)
        expect(screen.getByText('Test task')).toBeInTheDocument();
    })
    it('calls onToggle when checkbox is clicked', () => {
        render(<TaskItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(onToggle).toHaveBeenCalledWith('1');
    });

    it('calls onDelete when delete button is clicked', () => {
        render(<TaskItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />);
        const deleteButton = screen.getByLabelText('delete');
        fireEvent.click(deleteButton);
        expect(onDelete).toHaveBeenCalledWith('1');
    });

    it('allows editing and calls onEdit', () => {
        render(<TaskItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />);

        const editButton = screen.getByLabelText('edit');
        fireEvent.click(editButton);

        const input = screen.getByDisplayValue('Test task');
        fireEvent.change(input, { target: { value: 'Updated task' } });

        const saveButton = screen.getByLabelText('save');
        fireEvent.click(saveButton);

        expect(onEdit).toHaveBeenCalledWith('1', 'Updated task');
    });
});