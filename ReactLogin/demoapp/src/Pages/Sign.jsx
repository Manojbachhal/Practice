import React from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { Button } from '@mui/material'
import ic_user from './images/ic_user.svg'
import CircularProgress from '@mui/material/CircularProgress';
import zaperon_logo from './images/zaperon_logo.png'

function Sign() {
    return (
        <>


            <Box sx={{ margin: 'auto', mt: '5%' }} width="35%" xs={12} sm={6}>
                {/* <Box  >

                    <img src={ic_user} alt="" />
                    <CircularProgress />

                </Box> */}



                <div style={{ backgroundColor: '#EFEFEF', borderRadius: '50%', margin: 'auto', width: '17%', padding: '20px 25px' }} >
                    <img src={ic_user} alt="" style={{ width: '100%' }} />
                </div>

                <p>Let's connect to your workspace. <br />Please enter your email to continue.</p>

                <form >
                    <Grid >
                        <TextField fullWidth size="small" id="outlined-basic" label="Email Address" variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Grid >
                        <TextField fullWidth size="small" id="standard-password-input" label="Password" type="password" autoComplete="current-password"
                        />
                    </Grid>
                    {/* <Grid> */}
                    <p style={{ textAlign: 'end', color: '#003FB9', fontWeight: 'bold' }}>Forgot Password</p>

                    {/* </Grid> */}


                    <Button variant="contained" color="primary" style={{ width: '100%' }} >
                        Sign in
                    </Button>

                </form>

            </Box >
            <footer sx={{ mt: '10%' }}>

                <Box style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10%' }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p style={{ color: '#A2A2A2' }}>Powered By</p>
                        <img src={zaperon_logo} alt='logo' style={{ width: '40%', height: '40%', alignSelf: 'center' }} />
                    </Box>
                    <Box style={{ color: '#003FB9', display: 'flex', justifyContent: 'space-around', width: '20%' }}>
                        <p>Need Help?</p>
                        <p >Privacy Policy <span style={{ color: '#A2A2A2' }}>&</span> Terms</p>
                    </Box>
                </Box>
            </footer >
        </>

    )
}

export default Sign