import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import { useObserver } from '../../hooks/useObserver';
import { CircularProgressWithLabel } from './CircularProgressWithLabel';
import { LinearProgressWithLabel } from './LinearProgressWithLabel';
import { SoftSkills, TechnicalSkills } from './SkillsItems';

export const Skills: React.FC = () => {
    const isVisible = useObserver('.skills');

    return (
        <Stack flexDirection="row" justifyContent="space-between" sx={{ mb: 4 }} useFlexGap className="skills">
            <Box sx={{ width: '50%' }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Технические навыки
                </Typography>
                <Stack>
                    {isVisible &&
                        TechnicalSkills.map((tSkill, index) => <LinearProgressWithLabel tSkill={tSkill} key={index} />)}
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
                    {isVisible &&
                        SoftSkills.map((sSkill, index) => <CircularProgressWithLabel sSkill={sSkill} key={index} />)}
                </Box>
            </Box>
        </Stack>
    );
};
