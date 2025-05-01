import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TasksState } from './types/task.types';

const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<Task>) {
            state.tasks.push(action.payload);
        },
        toggleTask(state, action: PayloadAction<string>) {
            const task = state.tasks.find(t => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(t => t.id !== action.payload);
        }
    }
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;