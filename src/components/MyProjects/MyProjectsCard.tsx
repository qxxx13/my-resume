import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

import { MyProjectsType } from '../../models/MyProjectsModel';

type MyProjectItemProps = {
    item: MyProjectsType;
};

export const MyProjectsCard: React.FC<MyProjectItemProps> = (props) => {
    const coreTechologies = props.item.coreTechnologies.split(' ');

    return (
        <Paper sx={{ display: 'flex', padding: 2 }}>
            <Box>
                <Typography variant="h1" sx={{ width: 469, height: 300 }}>
                    IMG
                </Typography>
            </Box>
            <Stack>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    {props.item.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {props.item.description}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Основные технологии проекта:
                </Typography>
                <Stack flexDirection="row" useFlexGap sx={{ mb: 2 }}>
                    {coreTechologies.map((technology, index) => (
                        <Chip key={index} variant="outlined" label={technology} />
                    ))}
                </Stack>
                <Button sx={{ width: 'fit-content' }}>
                    <GitHubIcon />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                        Смотреть на GitHub
                    </Typography>
                </Button>
                <Button sx={{ width: 'fit-content' }}>
                    <PreviewIcon />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                        Перейти на GitHubPages
                    </Typography>
                </Button>
            </Stack>
        </Paper>
    );
};
