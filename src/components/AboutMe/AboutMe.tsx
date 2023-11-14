import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

import AboutMeLogo from '../../common/img/AboutMeImage.png';
import { MainSkills } from './MainSkills';
import { WhatIDoList } from './WhatIDo/WhatIDoList';

export const AboutMe: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
    return (
        <>
            <Stack sx={{ mt: 6 }} flexDirection={!isDesktop ? 'column' : 'row'} justifyContent="space-between">
                <Box>
                    <img src={AboutMeLogo} alt="aboutMe-img" height={'100%'} width={'100%'} />
                </Box>
                <Box>
                    <Typography variant="h3" sx={{ mb: 2 }} textAlign={isDesktop ? 'left' : 'center'}>
                        Обо мне
                    </Typography>
                    <Typography variant="body1">
                        Привет, меня зовут Николай, я студент 4 курса. Занимаюсь React-Frontend разработкой. Мои
                        основные навыки:
                    </Typography>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            flexWrap: 'wrap',
                            mt: 3,
                            gap: '5px',
                            maxHeight: 150,
                            overflow: 'auto',
                        }}
                    >
                        {MainSkills.map((skill, index) => (
                            <Chip variant="outlined" label={skill} key={index} />
                        ))}
                    </Box>
                </Box>
            </Stack>
            <WhatIDoList isDesktop={isDesktop} />
        </>
    );
};
