import { lazy, Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('../features/auth/pages/RegisterPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));
const ProjectDetailsPage = lazy(() => import('../features/projects/pages/ProjectDetailsPage'));
const ProjectTasksPage = lazy(() => import('../pages/ProjectTasksPage'));

const AppRouter = () => {
    const { token } = useSelector((state: RootState) => state.auth);

    const isAuthenticated = !!token;


    return (
        <Suspense fallback={
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh">
                <CircularProgress size={60} color='primary' />
            </Box>
        }>
            <Routes>
                {!isAuthenticated ? (
                    <>

                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<Navigate to="/login" />} />

                    </>
                ) : (
                    <>
                        <Route path="/" element={<DashboardLayout />}>
                            <Route path="dashboard" element={<DashboardPage />} />
                            <Route path="projects" element={<ProjectsPage />} />
                            <Route path="projects/:id/tasks" element={<ProjectTasksPage />} />
                            <Route path="projects/:id" element={<ProjectDetailsPage />} />
                            <Route path="*" element={<Navigate to="/dashboard" />} />
                        </Route>

                    </>
                )}
            </Routes>
        </Suspense>

    );
};

export default AppRouter;