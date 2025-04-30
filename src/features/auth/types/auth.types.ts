export interface LogingFormInputs {
    email: string;
    password: string;

}

export interface User {
    id: string;
    name: string;
    email: string;
};

export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export interface RegisterFormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

