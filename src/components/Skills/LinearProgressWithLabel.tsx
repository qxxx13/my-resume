import { Box, LinearProgressProps, Stack, Typography } from '@mui/material';
import React from 'react';

import { StyledLinearProgress } from '../../styles/StyledLinearProgress';

type LinearProgressWithLabelProps = {
    props?: LinearProgressProps;
    tSkill: { value: number; title: string };
};

export const LinearProgressWithLabel: React.FC<LinearProgressWithLabelProps> = (props) => {
    const toValue = props.tSkill.value.toString() + '%';

    return (
        <>
            <Typography variant="body1">{props.tSkill.title}</Typography>
            <Stack alignItems="center" flexDirection="row" sx={{ mb: 2 }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <StyledLinearProgress
                        sx={{ height: 8, borderRadius: 2 }}
                        toValue={toValue}
                        variant="indeterminate"
                    />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">
                        {props.tSkill.value}%
                    </Typography>
                </Box>
            </Stack>
        </>
    );
};
