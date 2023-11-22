import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import BgImage3 from '../../common/img/BgImage3.jpg';
import { useFindSizeBlock } from '../../hooks/useFindSizeBlock';
import { ExperienceCard } from './ExperienceCard';
import { EducationalExperience, WorkExperience } from './ExperienceItems';

export const Experience: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
    const { ref, height } = useFindSizeBlock();

    return (
        <Stack
            flexDirection={isDesktop ? 'row' : 'column'}
            gap="20px"
            justifyContent="space-between"
            alignItems={isDesktop ? 'flex-start' : 'center'}
            ref={ref}
            sx={{ mt: 2 }}
        >
            <img src={BgImage3} alt="background" className="Background" style={{ height: height }} />
            <Box sx={{ width: '100%' }}>
                <Typography variant="h4" textAlign="center">
                    Образование/курсы
                </Typography>
                <Stack>
                    {EducationalExperience.map((item, index) => (
                        <ExperienceCard
                            title={item.title}
                            years={item.years}
                            description={item.description}
                            key={index}
                            responsibilities={item.responsibilities}
                        />
                    ))}
                </Stack>
            </Box>
            <Box sx={{ width: '100%' }}>
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
                            responsibilities={item.responsibilities}
                        />
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};
