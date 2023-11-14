import { Container, useMediaQuery } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Scrollbar } from 'react-scrollbars-custom';

import { AboutMe } from './components/AboutMe/AboutMe';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { MyProjects } from './components/MyProjects/MyProjects';
import { Skills } from './components/Skills/Skills';

export const App = () => {
    const isDesktop = useMediaQuery('(min-width:950px)');

    return (
        <Scrollbar style={{ width: '100vw', height: '100vh' }}>
            <Container sx={{ color: 'white', mt: 6 }}>
                <Fade duration={1000}>
                    <Home isDesktop={isDesktop} />
                    <AboutMe isDesktop={isDesktop} />
                    <MyProjects isDesktop={isDesktop} />
                    <Skills isDesktop={isDesktop} />
                    <Experience isDesktop={isDesktop} />
                    <Footer />
                </Fade>
            </Container>
        </Scrollbar>
    );
};
