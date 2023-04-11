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
                        <Typography variant="body1" style={{ color: '#ACACAC' }}>Powered By</Typography>
                        <Grid item sm={12} xs={12} >
                            <img src={zaperon_logo} style={{ width: '90%', height: '40%' }} />
                            {/* style={{ height: "7vh", width: "30vh" }} */}
                            {/* , margin: '0px 15px 15px 15px' */}
                        </Grid>

                    </Box>
                    <Box sx={{ display: ['grid', 'grid', 'flex'], justifyContent: ['center', 'center', 'space-evenly'] }}>
                        <Typography variant="body1" sx={{ color: '#003FB9', margin: { sm: '15px', md: '0px', lg: '0px' } }} >Need Help? </Typography>

                        <Typography variant="body1" sx={{ color: '#003FB9', marginLeft: { sm: '0', md: '0px', lg: '15px' } }}>Privacy Policy <span style={{ color: '#ACACAC' }}> & </span> Terms</Typography>

                    </Box>
                </Container>
            </footer>
        </div >
    );
}