import { Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    container: {
        backgroundColor: 'white',
        maxWidth: '800px',
        margin: 'auto',
    },
}));

const Login = () => {
    const { classes } = useStyles();
    return <Grid container direction="column" className={classes.container}>
        <Grid item>
            <Typography variant='h3'>Name</Typography>
        </Grid>
    </Grid>;
};

export default Login;
