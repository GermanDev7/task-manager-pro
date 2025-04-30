import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { hideSnackbar } from "../features/ui/uiSlice";

const AppSnackbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { snackbar } = useSelector((state: RootState) => state.ui);

    const handleClose = () => {
        dispatch(hideSnackbar());
    }

    return (
        <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={snackbar.message}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />

    );
};

export default AppSnackbar;