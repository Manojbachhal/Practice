import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';



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
                <Container maxWidth="sm">
                    <Typography variant="body1">My sticky footer can be found here.</Typography>
                </Container>
            </footer>
        </div>
    );
}