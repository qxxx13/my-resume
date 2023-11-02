import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import { CircularProgressWithLabel } from './CircularProgressWithLabel';
import { LinearProgressWithLabel } from './LinearProgressWithLabel';

export const Skills: React.FC = () => {
    return (
        <Stack flexDirection="row" justifyContent="space-between" sx={{ mb: 4 }} useFlexGap>
            <Box sx={{ width: '50%' }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Технические навыки
                </Typography>
                <Stack>
                    <LinearProgressWithLabel value={40} description="JavaScript" />
                    <LinearProgressWithLabel value={40} description="TypeScript" />
                    <LinearProgressWithLabel value={40} description="React" />
                    <LinearProgressWithLabel value={40} description="Redux" />
                </Stack>
            </Box>
            <Box sx={{ width: '50%' }}>
                <Typography variant="h4" textAlign="center">
                    Гибкие навыки
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '1fr 1fr',
                        justifyItems: 'center',
                    }}
                >
                    <CircularProgressWithLabel value={40} description="Коммуникативность" />
                    <CircularProgressWithLabel value={40} description="Ответственность" />
                    <CircularProgressWithLabel value={40} description="Командная работа" />
                    <CircularProgressWithLabel value={40} description="Обучаемость" />
                </Box>
            </Box>
        </Stack>
    );
};
