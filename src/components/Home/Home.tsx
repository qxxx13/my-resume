import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import TelegramIcon from '@mui/icons-material/Telegram';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';

import MainPageBgImg from '../../common/img/BgImage.jpg';
import TrueSigmaImg from '../../common/img/TrueSigma.jpg';
import { LinkButtonStyle } from '../../styles/LinkStyles';
import { MessageBgStyles } from '../../styles/MessageBgStyles';

export const Home: React.FC = () => {
    return (
        <Stack flexDirection="row" justifyContent="space-between">
            <img src={MainPageBgImg} alt="background" className="MainPage-bg" />
            <Stack justifyContent="center">
                <Box>
                    <MessageBgStyles elevation={10}>
                        <Typography variant="h6">Привет, я </Typography>
                    </MessageBgStyles>

                    <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
                        Назаренко Николай
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        {'<React-Frontend разработчик />'}
                    </Typography>
                </Box>
                <Box>
                    <LinkButtonStyle href="mailto:redecv9@gmail.com" sx={{ display: 'flex' }}>
                        <EmailIcon />
                        <Typography variant="body2" sx={{ ml: 2 }}>
                            redecv9@gmail.com
                        </Typography>
                    </LinkButtonStyle>
                    <LinkButtonStyle href="https://t.me/qxxx13" target="_blank" sx={{ display: 'flex' }}>
                        <TelegramIcon />
                        <Typography variant="body1" sx={{ ml: 2 }}>
                            89996952937
                        </Typography>
                    </LinkButtonStyle>
                    <LinkButtonStyle
                        href="https://yandex.ru/maps/geo/azov/53166360/?ll=39.427026%2C47.086509&z=13.3"
                        target="_blank"
                        sx={{ display: 'flex' }}
                    >
                        <PlaceIcon />
                        <Typography variant="body1" sx={{ ml: 2 }}>
                            г. Азов
                        </Typography>
                    </LinkButtonStyle>
                    <Stack flexDirection="row" alignItems="center" alignContent="center">
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
                </Box>
            </Stack>
            <Box>
                <img src={TrueSigmaImg} alt="true sigma" height={400} width={400} style={{ borderRadius: '50%' }} />
            </Box>
        </Stack>
    );
};
