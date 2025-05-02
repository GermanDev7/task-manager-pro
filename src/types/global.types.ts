import { ReactNode } from "react";

export interface Props {
    children: React.ReactNode;
}

export interface ConfirmDialogProps {
    open: boolean;
    title: string;
    description?: string;
    onClose: () => void;
    onConfirm: () => void
}

export interface ErrorBoundaryProps {
    fallback: ReactNode;
    children: ReactNode;
}

export interface ErrorBoundaryState {
    hasError: boolean;
}