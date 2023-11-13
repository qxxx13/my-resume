import { Box, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

import MainPageBgImg from '../../common/img/BgImage.jpg';
import { MyProjectsCard } from './MyProjectsCard';
import { MyProjectsItems } from './MyProjectsItems';

export const MyProjects: React.FC = () => {
    return (
        <Box sx={{ minHeight: 500, mb: 2 }}>
            <img src={MainPageBgImg} alt="background" className="MyProjects-bg" />
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
                Мои проекты
            </Typography>
            <Carousel indicators swipe cycleNavigation navButtonsAlwaysVisible fullHeightHover autoPlay={false}>
                {MyProjectsItems.map((item, index) => (
                    <MyProjectsCard key={index} item={item} />
                ))}
            </Carousel>
        </Box>
    );
};
