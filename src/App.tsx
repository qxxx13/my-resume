import { Container } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { AboutMe } from './components/AboutMe/AboutMe';
import { Experience } from './components/Experience/Experience';
import { Home } from './components/Home/Home';
import { MyProjects } from './components/MyProjects/MyProjects';
import { Skills } from './components/Skills/Skills';

export const App = () => {
    return (
        <Container sx={{ color: 'white', mt: 6 }}>
            <Fade duration={1500}>
                <Home />
                <AboutMe />
                <MyProjects />
                <Skills />
                <Experience />
            </Fade>
        </Container>
    );
};
