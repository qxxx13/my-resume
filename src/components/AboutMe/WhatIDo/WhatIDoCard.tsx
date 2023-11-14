import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

type WhatIDoCardProps = {
    iconUrl: string;
    Title: string;
    Description: string;
    isDesktop: boolean;
};

export const WhatIDoCard: React.FC<WhatIDoCardProps> = (props) => {
    return (
        <Grid item xs={props.isDesktop ? 4 : 12} justifySelf="center">
            <Card elevation={10}>
                <CardMedia
                    component="img"
                    alt="webdevelopmentIcon"
                    image={props.iconUrl}
                    sx={{ width: 50, height: 50, paddingLeft: 2 }}
                />
                <CardContent>
                    <Typography variant="h4">{props.Title}</Typography>
                    <Typography variant="body2">{props.Description}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
