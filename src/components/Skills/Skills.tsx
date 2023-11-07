import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import { CircularProgressWithLabel } from './CircularProgressWithLabel';
import { LinearProgressWithLabel } from './LinearProgressWithLabel';
import { SoftSkills, TechnicalSkills } from './SkillsItems';

export const Skills: React.FC = () => {
    return (
        <Stack flexDirection="row" justifyContent="space-between" sx={{ mb: 4 }} useFlexGap>
            <Box sx={{ width: '50%' }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Технические навыки
                </Typography>
                <Stack>
                    {TechnicalSkills.map((tSkill, index) => (
                        <LinearProgressWithLabel value={tSkill.value} description={tSkill.title} key={index} />
                    ))}
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
                    {SoftSkills.map((sSkill, index) => (
                        <CircularProgressWithLabel value={sSkill.value} description={sSkill.title} key={index} />
                    ))}
                </Box>
            </Box>
        </Stack>
    );
};
