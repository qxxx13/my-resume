import { Container } from '@mui/material';
import React from 'react';

import { AboutMe } from './components/AboutMe/AboutMe';
import { Experience } from './components/Experience/Experience';
import { Home } from './components/Home/Home';
import { MyProjects } from './components/MyProjects/MyProjects';
import { NavBar } from './components/NavBar/NavBar';
import { Skills } from './components/Skills/Skills';

export const App = () => {
    return (
        <>
            <NavBar />
            <Container sx={{ mt: '69px', color: 'white' }}>
                <Home />
                <AboutMe />
                <MyProjects />
                <Skills />
                <Experience />
            </Container>
        </>
    );
};
