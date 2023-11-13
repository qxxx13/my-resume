import { Box, CircularProgressProps, Typography } from '@mui/material';
import React from 'react';

import { StyledCircularProgress } from '../../styles/StyledCircularProgress';

type CircularProgressWithLabelWithLabelProps = {
    props?: CircularProgressProps;
    sSkill: { value: number; title: string };
};

export const CircularProgressWithLabel: React.FC<CircularProgressWithLabelWithLabelProps> = (props) => {
    const toValue = 126.92 / (100 / (100 - props.sSkill.value));
    return (
        <Box className="skills">
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <StyledCircularProgress variant="determinate" size={100} toValue={`${toValue}`} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {props.sSkill.value}%
                    </Typography>
                </Box>
            </Box>
            <Typography variant="body1">{props.sSkill.title}</Typography>
        </Box>
    );
};
