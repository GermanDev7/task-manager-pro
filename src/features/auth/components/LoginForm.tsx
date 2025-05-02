import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { login } from '../authSlice';
import { LogingFormInputs } from '../types/auth.types';
import { loginSchema } from '../validations/login.schema';

const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LogingFormInputs>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data: LogingFormInputs) => {
        dispatch(login({ user: { id: '1', name: 'German', email: data.email }, token: 'fake-jwt-token' }));

    }

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h5" align="center">Iniciar Sesion</Typography>

            <TextField
                label="Email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
            />
            <TextField
                label="Contraseña"
                type="password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Iniciar Sesión
            </Button>
        </Box>
    );
};

export default LoginForm;