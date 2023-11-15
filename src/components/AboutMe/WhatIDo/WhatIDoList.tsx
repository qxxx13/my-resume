import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { WhatIDoCard } from './WhatIDoCard';
import { WhatIDoDescriptions } from './WhatIDoDescription';

export const WhatIDoList: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
    return (
        <Box sx={{ mt: 10, mb: 10, width: '100%' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
                Чем я занимаюсь
            </Typography>
            <Grid container spacing={4} alignContent="stretch">
                {WhatIDoDescriptions.map((description, index) => (
                    <WhatIDoCard description={description} key={index} isDesktop={isDesktop} />
                ))}
            </Grid>
        </Box>
    );
};
