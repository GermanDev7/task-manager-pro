import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./types/auth.types";


const savedAuth = localStorage.getItem('auth');

const initialState: AuthState = savedAuth
    ? JSON.parse(savedAuth)
    : {
        user: null,
        token: null,
        loading: false,
        error: null,
    };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ user: User; token: string }>) {
            state.user = action.payload.user;
            state.token = action.payload.token;

            localStorage.setItem('auth', JSON.stringify({
                user: state.user,
                token: state.token
            }));
        },

        logout(state) {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;

            localStorage.removeItem('auth');
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
