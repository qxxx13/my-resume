import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import MainPageBgImg from '../../common/img/BgImage.jpg';
import { ExperienceCard } from './ExperienceCard';
import { EducationalExperience, WorkExperience } from './ExperienceItems';

export const Experience: React.FC = () => {
    return (
        <Stack flexDirection="row" useFlexGap justifyContent="space-between">
            <img src={MainPageBgImg} alt="background" className="Expirience-bg" />
            <Box sx={{ width: '50%' }}>
                <Typography variant="h4" textAlign="center">
                    Образование/курсы
                </Typography>
                <Stack alignItems="center">
                    {EducationalExperience.map((item, index) => (
                        <ExperienceCard
                            title={item.title}
                            years={item.years}
                            description={item.description}
                            key={index}
                        />
                    ))}
                </Stack>
            </Box>
            <Box sx={{ width: '50%' }}>
                <Typography variant="h4" textAlign="center">
                    Опыт работы
                </Typography>
                <Stack alignItems="center">
                    {WorkExperience.map((item, index) => (
                        <ExperienceCard
                            title={item.title}
                            years={item.years}
                            description={item.description}
                            key={index}
                        />
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};
