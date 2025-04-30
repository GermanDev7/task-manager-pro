import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProjectsPage from '../pages/ProjectsPage';
import DashboardLayout from '../layouts/DashboardLayout';
import ProjectDetailsPage from '../features/projects/pages/ProjectDetailsPage';

const AppRouter = () => {
    const { token } = useSelector((state: RootState) => state.auth);

    const isAuthenticated = !!token;


    return (
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
                        <Route path="projects/:id" element={<ProjectDetailsPage />} />
                        <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Route>

                </>
            )}
        </Routes>
    );
};

export default AppRouter;