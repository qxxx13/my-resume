import { Box, Card, Typography } from '@mui/material';
import React from 'react';

export type ExperienceCardProps = {
    title: string;
    years: string;
    description: string;
    responsibilities?: string[];
};

export const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
    return (
        <Box>
            <Card sx={{ padding: '26px 30px', mt: 2, height: 'max-content' }} elevation={10}>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                    {props.years}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {props.description}
                </Typography>
                {props.responsibilities &&
                    props.responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
            </Card>
        </Box>
    );
};
