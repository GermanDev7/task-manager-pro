export interface Props{
    children:React.ReactNode;
}

export interface ConfirmDialogProps{
    open:boolean;
    title:string;
    description?:string;
    onClose:()=>void;
    onConfirm:()=>void
}