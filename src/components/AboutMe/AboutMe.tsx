import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import AboutMeLogo from '../../common/img/AboutMePageImg/AboutMeImg.png';
import { SkillBoxStyled } from '../../styles/SkillBoxStyles';
import { WhatiDoBlock } from './WhatIDoBlock';

export const AboutMe: React.FC = () => {
    return (
        <>
            <Stack sx={{ mt: 15 }} flexDirection="row" justifyContent="space-between">
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
                    <Box sx={{ display: 'inline-flex', mt: 3 }}>
                        <SkillBoxStyled>JavaScript</SkillBoxStyled>
                        <SkillBoxStyled>TypeScript</SkillBoxStyled>
                        <SkillBoxStyled>React</SkillBoxStyled>
                        <SkillBoxStyled>Redux</SkillBoxStyled>
                    </Box>
                </Box>
            </Stack>
            <WhatiDoBlock />
        </>
    );
};
