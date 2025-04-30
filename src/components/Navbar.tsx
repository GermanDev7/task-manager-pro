import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { AppDispatch } from "../store/store";

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login')
    }

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">TaskFlow</Typography>
                <Box>
                    <Button color="inherit" onClick={handleLogout}>
                        Cerrar Sesion
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;