import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import zaperon_logo from './images/zaperon_logo.png'
import { Box } from '@mui/material';



const classes = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    // main: {
    //     marginTop: theme.spacing(8),
    //     marginBottom: theme.spacing(2),
    // },
    // footer: {
    //     padding: theme.spacing(3, 2),
    //     marginTop: 'auto',
    //     backgroundColor:
    //         theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    // },
};

export default function StickyFooter() {

    return (
        <div className={classes.root}>

            <footer >
                <Container sx={{ display: ['grid', 'grid', 'flex'], justifyContent: ['center', 'center', 'space-between'], }} >
                    <Box sx={{ display: ['grid', 'grid', 'flex'], justifyContent: ['center', 'center', 'space-evenly'] }} >
                        <Typography variant="body1">Powered By</Typography>
                        <img src={zaperon_logo} alt="zaoeron" style={{ width: '30%', height: '80%' }} />

                    </Box>
                    <Box sx={{ display: ['grid', 'grid', 'flex'], justifyContent: ['center', 'center', 'space-evenly'] }}>
                        <Typography variant="body1">Need Help?</Typography>

                        <Typography variant="body1">Privacy Policy & Terms</Typography>

                    </Box>
                </Container>
            </footer>
        </div>
    );
}