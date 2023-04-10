import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ic_user from './images/ic_user.svg'
import axios from 'axios'




const theme = createTheme();

export default function Signin() {
    const LoginCall = async (data) => {
        return axios.post('http://localhost:4000/login', data, {
            withCredentials: true
        }).then((response) => response.data)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let obj = {
            email: data.get('email'),
            password: data.get('password'),
        };

        LoginCall(obj)
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'gray', w: '50%', width: ['30px', '40px', '70px'], height: ['30px', '40px', '70px'] }} src={ic_user}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Grid item xs sx={{ textAlign: 'end' }}>
                            <Link href="#" variant="body2" >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        {/* <Grid container> */}

                        <Grid item >
                            <Link href="#" variant="body2" >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        {/* </Grid> */}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}