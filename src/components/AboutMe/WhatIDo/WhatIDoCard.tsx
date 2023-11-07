import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

type WhatIDoCardProps = {
    iconUrl: string;
    Title: string;
    Description: string;
};

export const WhatIDoCard: React.FC<WhatIDoCardProps> = (props) => {
    return (
        <Card elevation={10} sx={{ maxWidth: 350, maxHeight: 250 }}>
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
    );
};
