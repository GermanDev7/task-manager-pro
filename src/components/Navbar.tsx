import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { AppDispatch } from "../store/store";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login')
    }

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="h6">TaskFlow</Typography>
                <Button color="inherit" component={Link} to="/dashboard">
                    Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/projects">
                    Projects
                </Button>

                <Box sx={{ flexGrow: 1 }}></Box>
                <Button color="inherit" onClick={handleLogout}>
                    Cerrar Sesion
                </Button>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;