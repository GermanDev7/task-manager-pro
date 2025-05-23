import Box  from "@mui/material/Box";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <RegisterForm />
        </Box>
    );
};

export default RegisterPage;