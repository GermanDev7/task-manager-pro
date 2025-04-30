import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ padding: 2 }}>
                <Outlet />
            </Box>
        </>
    )
}

export default DashboardLayout;
