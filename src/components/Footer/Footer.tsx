import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import { Stack, Tooltip } from '@mui/material';
import React from 'react';

import { LinkButtonStyle } from '../../styles/LinkStyles';

export const Footer: React.FC = () => {
    return (
        <Stack
            flexDirection="row"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            sx={{ mt: 8, mb: 2 }}
        >
            <Tooltip title="Мой GitHub">
                <LinkButtonStyle href="https://github.com/qxxx13" target="_blank">
                    <GitHubIcon />
                </LinkButtonStyle>
            </Tooltip>
            <Tooltip title="Мой HH.Ru">
                <LinkButtonStyle
                    href="https://azov.hh.ru/resume/ac5e204eff0be5e21d0039ed1f6b5456347034"
                    target="_blank"
                >
                    <WorkIcon />
                </LinkButtonStyle>
            </Tooltip>
        </Stack>
    );
};
