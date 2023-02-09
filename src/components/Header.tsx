import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React from 'react';
import logo from '../public/assets/auth/logo.png';
import { makeStyles } from 'tss-react/mui';
import Link from 'next/link';
import Image from 'next/image';
import useActiveLink from '@/hooks/use-active-link';

interface Props {
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles()((theme) => ({
    logoWrapper: {
        padding: 0,
    },
    tabs: {
        marginLeft: 'auto',
        '& .MuiTabs-indicator': {
            backgroundColor: 'white',
        },
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: '25px',
        minWidth: 10,
    },
    logout: {
        ...theme.typography.logout,
        marginLeft: '25px',
    },
    appBarMargin: {
        height: '7rem',
    },
}));

const headerLinks = [
    { label: 'Pokedex', href: '/auth/pokedex', value: 'pokedex' },
    { label: 'Register', href: '/auth/register', value: 'register' },
    { label: 'Login', href: '/auth/login', value: 'login' },
];

const Header = () => {
    const { classes } = useStyles();
    const { currentLink } = useActiveLink('pokedex');

    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h5" component="div">
                            <Button className={classes.logoWrapper} disableRipple>
                                <Image src={logo.src} alt="pokemon logo" width={270} height={100} />
                            </Button>
                        </Typography>
                        <Tabs className={classes.tabs} value={currentLink}>
                            {headerLinks.map((link) => (
                                <Tab
                                    key={link.label}
                                    label={link.label}
                                    component={Link}
                                    value={link.value}
                                    href={link.href}
                                    className={classes.tab}
                                />
                            ))}
                        </Tabs>
                        <Button variant="outlined" color="inherit" className={classes.logout}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.appBarMargin} />
        </>
    );
};

export default Header;
