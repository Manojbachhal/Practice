import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import zaperon_logo from './images/zaperon_logo.png'
import { Box, Grid } from '@mui/material';



const classes = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },

};

export default function StickyFooter() {

    return (
        <div className={classes.root} style={{ marginTop: '7%', gap: '10px' }}>

            <footer >
                <Container sx={{ display: ['grid', 'grid', 'flex'], justifyContent: ['center', 'center', 'space-between'] }} >
                    <Box sx={{ display: ['grid', 'grid', 'flex'], justifyContent: ['center', 'center', 'space-evenly'] }} >
                        <Typography variant="body1" style={{ color: '#ACACAC', marginRight: '5px' }}>Powered By</Typography>
                        <Grid item sm={12} xs={12}>
                            <img src={zaperon_logo} style={{ height: "4vh", width: "15vh" }} />
                        </Grid>
                        {/* <img src={zaperon_logo} alt="zaoeron" style={{ width: '30%', height: '80%' }} /> */}

                    </Box>
                    <Box sx={{ display: ['grid', 'grid', 'flex'], justifyContent: ['center', 'center', 'space-evenly'] }}>
                        <Typography variant="body1" sx={{ color: '#003FB9' }}>Need Help? </Typography>

                        <Typography variant="body1" sx={{ color: '#003FB9' }}>Privacy Policy <span style={{ color: '#ACACAC' }}> & </span> Terms</Typography>

                    </Box>
                </Container>
            </footer>
        </div >
    );
}