import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import bgImage from '../../public/assets/auth/bg.gif';
import useActiveLink from '@/hooks/use-active-link';
import Register from '@/pages/auth/Register';
import Pokedex from '@/pages/auth/Pokedex';
import Login from '@/pages/auth/Login';

const useStyles = makeStyles()((theme) => ({
    image: {
        zIndex: -1
    },
    backdrop: {
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
}));

const AuthRoot = () => {
    const { classes } = useStyles();
    const { currentLink } = useActiveLink('register');

    return (
        <>
            <Header />
            <Image src={bgImage} alt="background" fill priority className={classes.image} />
            <div className={classes.backdrop} />
            {currentLink === 'pokedex' && <Pokedex />}
            {currentLink === 'register' && <Register />}
            {currentLink === 'login' && <Login />}
        </>
    );
};

export default AuthRoot;
