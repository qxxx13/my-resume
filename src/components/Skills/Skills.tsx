import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import { useObserver } from '../../hooks/useObserver';
import { CircularProgressWithLabel } from './CircularProgressWithLabel';
import { LinearProgressWithLabel } from './LinearProgressWithLabel';
import { SoftSkills, TechnicalSkills } from './SkillsItems';

export const Skills: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
    const isVisible = useObserver('.skills');

    return (
        <Stack
            flexDirection={isDesktop ? 'row' : 'column'}
            justifyContent="space-between"
            sx={{ mt: 4 }}
            useFlexGap
            className="skills"
        >
            <Box sx={{ width: '100%' }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Технические навыки
                </Typography>
                <Stack>
                    {isVisible &&
                        TechnicalSkills.map((tSkill, index) => <LinearProgressWithLabel tSkill={tSkill} key={index} />)}
                </Stack>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Typography variant="h4" textAlign="center">
                    Гибкие навыки
                </Typography>
                <Grid container spacing={2} justifySelf="center" marginTop={2}>
                    {isVisible &&
                        SoftSkills.map((sSkill, index) => <CircularProgressWithLabel sSkill={sSkill} key={index} />)}
                </Grid>
            </Box>
        </Stack>
    );
};
