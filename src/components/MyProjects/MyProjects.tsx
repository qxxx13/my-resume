import { Box, Typography } from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-material-ui-carousel';

import BgImg2 from '../../common/img/BgImage2.jpg';
import { useFindHeightBlock } from '../../hooks/useFindHeightBlock';
import { MyProjectsCard } from './MyProjectsCard';
import { MyProjectsItems } from './MyProjectsItems';

export const MyProjects: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
    const { ref, height } = useFindHeightBlock();

    return (
        <Box sx={{ mb: 2 }} ref={ref}>
            <LazyLoadImage src={BgImg2} alt="background" className="Background" style={{ height: height + 25 }} />
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
                Мои проекты
            </Typography>
            <Carousel
                indicators
                cycleNavigation
                navButtonsAlwaysVisible
                fullHeightHover
                autoPlay={false}
                swipe={false}
                animation="slide"
            >
                {MyProjectsItems.map((item, index) => (
                    <MyProjectsCard key={index} item={item} isDesktop={isDesktop} />
                ))}
            </Carousel>
        </Box>
    );
};
