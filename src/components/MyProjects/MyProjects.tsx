import { Box, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

import MainPageBgImg from '../../common/img/MainPageImg/MainPageBGImg.jpg';
import { items } from './Items';
import { MyProjectItem } from './MyProjectItem';

export const MyProjects: React.FC = () => {
    return (
        <Box sx={{ height: 450 }}>
            <img src={MainPageBgImg} alt="background" className="MyProjects-bg" />
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
                Мои проекты
            </Typography>
            <Carousel>
                {items.map((item, i) => (
                    <MyProjectItem key={i} item={item} />
                ))}
            </Carousel>
        </Box>
    );
};
