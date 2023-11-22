import { Box, Typography } from '@mui/material';
import React from 'react';

import BgImg2 from '../../common/img/BgImage2.jpg';
import { useFindSizeBlock } from '../../hooks/useFindSizeBlock';
import { Carousel } from './Carousel';
import { MyProjectsCard } from './MyProjectsCard';
import { MyProjectsItems } from './MyProjectsItems';

export const MyProjects: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
    const { ref, height, width } = useFindSizeBlock();

    return (
        <Box sx={{ mb: 2, position: 'sticky' }} ref={ref}>
            <img src={BgImg2} alt="background" className="Background" style={{ height: height + 25 }} />
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
                Мои проекты
            </Typography>
            <Carousel>
                {MyProjectsItems.map((item, index) => (
                    <MyProjectsCard key={index} item={item} isDesktop={isDesktop} width={width} />
                ))}
            </Carousel>
        </Box>
    );
};
