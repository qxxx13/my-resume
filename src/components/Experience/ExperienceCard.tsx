import { Card, Typography } from '@mui/material';
import React from 'react';

export type ExperienceCardProps = {
    title: string;
    years: string;
    description: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
    return (
        <Card sx={{ width: 450, height: 150, padding: '26px 30px', mt: 2 }} elevation={10}>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="body1">{props.years}</Typography>
            <Typography variant="body1">{props.description}</Typography>
        </Card>
    );
};
