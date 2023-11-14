import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import WebDevelopmentIcon from '../../../common/icons/WebDevelopmentIcon.png';
import { WhatIDoCard } from './WhatIDoCard';
import { WhatIDoDescriptions } from './WhatIDoDescription';

export const WhatIDoList: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
    return (
        <Box sx={{ mt: 10, mb: 10, width: '100%' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
                Чем я занимаюсь
            </Typography>
            <Grid container spacing={2}>
                {WhatIDoDescriptions.map((description, index) => (
                    <WhatIDoCard
                        iconUrl={WebDevelopmentIcon}
                        Title={description.Title}
                        Description={description.Description}
                        key={index}
                        isDesktop={isDesktop}
                    />
                ))}
            </Grid>
        </Box>
    );
};
