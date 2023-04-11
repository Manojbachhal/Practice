import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ic_user from './images/ic_user.svg'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { Authctx } from '../Context/Authcontext';
import { useState } from 'react';
import axios from 'axios'


const theme = createTheme();

export default function SignUp() {
    const { login, setLogin, setUser } = useContext(Authctx)
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setpassError] = useState(false);
    const [msgDisplay, setmsgDisplay] = useState(true);

    const signUpCall = async (data) => {
        try {
            let res = await axios.post('http://localhost:4000/register', data, {
                withCredentials: true
            })

            console.log(res.data.massage)
            // if (data.massage == "Registration sucessfull") {
            navigate('/')
            // }

        } catch (error) {
            // console.log()
            if (error.response.data == "User Already Registered") {
                setmsgDisplay(false);
            }
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

            signUpCall(obj)
        }
        event.currentTarget.reset();
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
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Typography component="h5" variant="p" sx={{ color: 'red', display: msgDisplay ? "none" : "block" }} >
                        User already Exist try login
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    error={emailError}
                                    helperText={emailError ? 'Please enter a valid email' : ' '}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    error={passwordError}
                                    helperText={passwordError ? 'Password must be 8 character long' : ' '}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/' variant="body2" style={{ textDecoration: 'none', color: '#003FB9' }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}