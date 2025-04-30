import LoginForm from "../components/LoginForm";
import { Box } from "@mui/material";

const LoginPage = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <LoginForm />
        </Box>
    );
};

export default LoginPage;