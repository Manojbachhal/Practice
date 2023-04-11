import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ic_user from './images/ic_user.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Authctx } from '../Context/Authcontext';
import { useState } from 'react';




const theme = createTheme();

export default function Signin() {
    const { login, setLogin, setUser } = useContext(Authctx)
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setpassError] = useState(false);

    const LoginCall = async (data) => {
        try {
            return axios.post('http://localhost:4000/login', data, {
                withCredentials: true
            }).then((response) => response.data).then((d) => {
                console.log(d)

                if (d.Token) {
                    setLogin(!login)
                    setUser(d.data.email)
                    navigate('/home')
                }
            })

        } catch (error) {
            console.log(error)
        }

    }
    const checkpass = (da) => {
        return da.length < 7;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let obj = {
            email: data.get('email'),
            password: data.get('password'),
        };

        let email = data.get('email')

        let checkpassword = checkpass(data.get('password'));
        setpassError(checkpassword)
        console.log(checkpassword)

        let check = ""; let checkat = false; let checkdot = 0;

        for (let i = 0; i < email.length; i++) {

            if (email[i] == '@' && i > 0) {
                checkat = true;
            }
            if (check == ".com" && checkat) {
                break;
            }

            if (email[i] == '.' && checkdot < 4) {
                checkdot++;
                check = "";
                check += email[i];
            } else if (checkdot > 0 && checkdot < 4) {
                checkdot++;
                check += email[i];
            }
            if (check.length == 4 && check != ".com") {
                checkdot = 0;
                check = "";
            }

        }
        if (check != ".com") {
            setEmailError(true)
        } else {
            setEmailError(false)
        }

        if (!emailError && !passwordError) {

            LoginCall(obj)
        }

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
                    <Avatar sx={{ m: 1, bgcolor: '#EFEFEF', w: '50%', width: ['30px', '40px', '70px'], height: ['30px', '40px', '70px'] }} src={ic_user}>
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
                            error={emailError}
                            helperText={emailError ? 'Please enter a valid email' : ' '}

                        />
                        <TextField
                            margin="normal"
                            required={true}
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={passwordError}
                            helperText={passwordError ? 'Password must be 8 character long' : ' '}

                        />
                        <Grid item xs sx={{ textAlign: 'end' }}>
                            <Link href="#" variant="body2" style={{ textDecoration: 'none', color: '#003FB9' }} >
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
                            <Link to='/signup' variant="body2" style={{ textDecoration: 'none', color: '#003FB9' }}>
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