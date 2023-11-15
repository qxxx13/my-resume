import { Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import { WhatIDoDescriptionType } from '../../../models/WhatIDoDescriptionModel';

type WhatIDoCardProps = {
    description: WhatIDoDescriptionType;
    isDesktop: boolean;
};

export const WhatIDoCard: React.FC<WhatIDoCardProps> = ({ description, isDesktop }) => {
    return (
        <Grid item xs={isDesktop ? 4 : 12} justifySelf="center">
            <Card elevation={10} sx={{ padding: '16px 16px 0 16px', height: '100%' }}>
                <Stack flexDirection="row" alignItems="center">
                    <CardMedia
                        component="img"
                        alt="webdevelopmentIcon"
                        image={description.iconUrl}
                        sx={{ width: 50, height: 50, ml: 1 }}
                    />
                    <Typography variant="h5" sx={{ ml: 2 }}>
                        {description.title}
                    </Typography>
                </Stack>
                <CardContent>
                    <Typography variant="body2">{description.description}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
