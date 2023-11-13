import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

import AboutMeLogo from '../../common/img/AboutMeImage.png';
import { MainSkills } from './MainSkills';
import { WhatIDoList } from './WhatIDo/WhatIDoList';

export const AboutMe: React.FC = () => {
    return (
        <>
            <Stack sx={{ mt: '100px' }} flexDirection="row" justifyContent="space-between">
                <Box>
                    <img src={AboutMeLogo} alt="aboutMe-img" height={330} width={540} />
                </Box>
                <Box sx={{ paddingLeft: 15 }}>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        Обо мне
                    </Typography>
                    <Typography variant="body1">
                        Привет, меня зовут Николай, я студент 4 курса. Занимаюсь React-Frontend разработкой. Мои
                        основные навыки:
                    </Typography>
                    <Box sx={{ display: 'inline-flex', mt: 3, flexWrap: 'wrap', gap: '5px' }}>
                        {MainSkills.map((skill, index) => (
                            <Chip variant="outlined" label={skill} key={index} />
                        ))}
                    </Box>
                </Box>
            </Stack>
            <WhatIDoList />
        </>
    );
};
