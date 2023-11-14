import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

import { MyProjectsType } from '../../models/MyProjectsModel';
import { LinkButtonStyle } from '../../styles/LinkStyles';

type MyProjectItemProps = {
    item: MyProjectsType;
    isDesktop: boolean;
};

export const MyProjectsCard: React.FC<MyProjectItemProps> = (props) => {
    const coreTechologies = props.item.coreTechnologies.split(' ');

    return (
        <Paper sx={{ padding: 2, minHeight: 350 }}>
            <Stack flexDirection={props.isDesktop ? 'row' : 'column'}>
                <Box>
                    <img src={props.item.img} alt="projectPreview" style={{ width: '100%', height: '100%' }} />
                </Box>
                <Stack sx={{ ml: 2 }}>
                    <Typography variant="h4">{props.item.name}</Typography>
                    <Typography variant="body1" sx={{ mt: 2, maxHeight: 150, overflow: 'auto' }}>
                        {props.item.description}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Основные технологии проекта:
                    </Typography>
                    <Box sx={{ display: 'inline-flex', gap: '5px', mt: 1, overflow: 'auto' }}>
                        {coreTechologies.map((technology, index) => (
                            <Chip key={index} variant="outlined" label={technology} />
                        ))}
                    </Box>
                    <LinkButtonStyle href={props.item.gitHubLink} target="_blank" sx={{ mt: 2 }}>
                        <GitHubIcon />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                            Смотреть на GitHub
                        </Typography>
                    </LinkButtonStyle>
                    <LinkButtonStyle href={props.item.livePreviewLink} target="_blank">
                        <PreviewIcon />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                            Перейти на GitHubPages
                        </Typography>
                    </LinkButtonStyle>
                </Stack>
            </Stack>
        </Paper>
    );
};
