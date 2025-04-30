import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { ConfirmDialogProps } from "../types/global.types";

const ConfirmDialog = ({
    open,
    title,
    description,
    onClose,
    onConfirm,
}: ConfirmDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Typography>{description}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button color="error" onClick={onConfirm}>
                    Eliminar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;