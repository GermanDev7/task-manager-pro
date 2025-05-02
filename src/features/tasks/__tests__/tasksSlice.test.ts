import tasksReducer, { addTask, deleteTask, toggleTask, editTask } from '../tasksSlice';
import { Task, TasksState } from '../types/task.types';

const initialState: TasksState = {
    tasks: []
};

describe('tasksSlice', () => {
    it('should return the initial state', () => {
        expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState);

    });

    it('should add a task', () => {
        const newTask:Task = { id: '1', title: 'Test task', completed: false, projectId: 'p1', createdAt: 'now' };
        const state = tasksReducer(initialState, addTask(newTask));
        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0]).toEqual(newTask);
    });

    it('should toggle a task', () => {
        const startState: TasksState = {
            tasks: [{ id: '1', title: 'Task', completed: false, projectId: 'p1', createdAt: 'now' }],
        };
        const state = tasksReducer(startState, toggleTask('1'));
        expect(state.tasks[0].completed).toBe(true);
    });

    it('should delete a task', () => {
        const startState: TasksState = {
            tasks: [{ id: '1', title: 'Task', completed: false, projectId: 'p1', createdAt: 'now' }],
        };
        const state = tasksReducer(startState, deleteTask('1'));
        expect(state.tasks).toHaveLength(0);
    });

    it('should edit a task title', () => {
        const startState: TasksState = {
            tasks: [{ id: '1', title: 'Old title', completed: false, projectId: 'p1', createdAt: 'now' }],
        };
        const state = tasksReducer(startState, editTask({ id: '1', title: 'new title' }));
        expect(state.tasks[0].title).toBe('new title');
    })

})