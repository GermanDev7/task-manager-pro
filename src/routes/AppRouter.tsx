import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import DashboardPage from '../features/auth/pages/DashboardPage';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

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
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
            )}
        </Routes>
    );
};

export default AppRouter;