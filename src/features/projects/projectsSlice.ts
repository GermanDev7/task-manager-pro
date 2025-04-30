import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "./types/projects.types";
import { ProjectsState } from "./types/projects.types";

const initialState: ProjectsState = {
    projects: [
        {
            id: crypto.randomUUID(),
            name: 'Proyecto 1',
            description: 'Este es el proyecto inicial',
            createdAt: new Date().toISOString(),
        },
        {
            id: crypto.randomUUID(),
            name: 'Proyecto 2',
            description: 'Segundo proyecto simulado.',
            createdAt: new Date().toISOString(),
        },
    ],

};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject(state, action: PayloadAction<Project>) {
            state.projects.push(action.payload);
        },
        deleteProject(state, action: PayloadAction<string>) {
            state.projects = state.projects.filter(p => p.id !== action.payload);
        },
        updateProject(state, action: PayloadAction<Project>) {
            const index = state.projects.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.projects[index] = action.payload;
            }
        }
    },
});

export const { addProject, deleteProject, updateProject } = projectsSlice.actions;
export default projectsSlice.reducer;