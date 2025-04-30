import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required('Nombre requerido'),
    email: yup.string().email('Email invalido').required('email requerido'),
    password: yup.string().min(6, 'Minimo 6 caracteres').required('Contraseña requerida'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
        .required('Confirmar contraseña es obligatorio'),
});