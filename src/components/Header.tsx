import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from '../public/assets/auth/logo.png';
import { makeStyles } from 'tss-react/mui';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
}));

const headerLinks = [
    { label: 'Pokedex', href: '/auth/pokedex', value: 'pokedex' },
    { label: 'Register', href: '/auth/register', value: 'register' },
    { label: 'Login', href: '/auth/login', value: 'login' },
];

const Header = () => {
    const { classes } = useStyles();
    const { isReady, query } = useRouter();
    const [activeHeaderLink, setActiveHeaderLink] = useState('pokedex');

    useEffect(() => {
        if (!isReady) {
            return;
        }
        const { mode } = query;
        if (!mode || typeof mode != 'string') {
            console.error('[ERR] Reroute to another path');
            return;
        }
        setActiveHeaderLink(mode);
    }, [isReady, query]);

    return (
        <ElevationScroll>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" component="div">
                        <Button className={classes.logoWrapper} disableRipple>
                            <img src={logo.src} alt="pokemon logo" width="270" height="100" />
                        </Button>
                    </Typography>
                    <Tabs className={classes.tabs} value={activeHeaderLink}>
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
    );
};

export default Header;
