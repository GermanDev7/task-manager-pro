import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../validations/register.schema';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { login } from '../authSlice';
import { RegisterFormInputs } from '../types/auth.types';

const RegisterForm = () => {
    const dispatch = useDispatch<AppDispatch>()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormInputs>({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormInputs) => {
        dispatch(login({
            user: {
                id: crypto.randomUUID(),
                name: data.name,
                email: data.email,
            },
            token: 'fake-token-generated-on-register',
        }));
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h5" align="center">
                Registrarse
            </Typography>
            <TextField
                label="Nombre completo"
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
            />
            <TextField
                label="Correo electronico"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
            />
            <TextField
                label="Confirmar contraseña"
                type="password"
                {...register('confirmPassword')}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Crear cuenta
            </Button>

        </Box>
    )
};

export default RegisterForm;

