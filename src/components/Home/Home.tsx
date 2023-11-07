import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import MainPageBgImg from '../../common/img/BgImage.jpg';
import TrueSigmaImg from '../../common/img/TrueSigma.jpg';
import { LinkButtonStyle, StyledLink } from '../../styles/LinkStyles';
import { MessageBgStyles } from '../../styles/MessageBgStyles';

export const Home: React.FC = () => {
    return (
        <Stack flexDirection="row" justifyContent="space-between">
            <img src={MainPageBgImg} alt="background" className="MainPage-bg" />
            <Stack>
                <Box>
                    <MessageBgStyles>
                        <Typography color="white" variant="h6">
                            Привет, я
                        </Typography>
                    </MessageBgStyles>

                    <Typography variant="h3" color="white" sx={{ mt: 2, mb: 2 }}>
                        Назаренко Николай
                    </Typography>
                    <Typography variant="h5" color="white" sx={{ mb: 2 }}>
                        React-Frontend разработчик
                    </Typography>
                </Box>
                <Box>
                    <StyledLink href="https://google.com" sx={{ display: 'flex' }}>
                        <EmailIcon />
                        <Typography variant="body2" sx={{ ml: 2 }}>
                            redecv9@gmail.com
                        </Typography>
                    </StyledLink>
                    <StyledLink href="https://google.com" sx={{ display: 'flex' }}>
                        <TelegramIcon />
                        <Typography variant="body1" sx={{ ml: 2 }}>
                            89996952937
                        </Typography>
                    </StyledLink>
                    <StyledLink href="https://google.com" sx={{ display: 'flex' }}>
                        <PlaceIcon />
                        <Typography variant="body1" sx={{ ml: 2 }}>
                            г. Азов
                        </Typography>
                    </StyledLink>
                    <LinkButtonStyle>
                        <GitHubIcon sx={{ mt: 3 }} />
                    </LinkButtonStyle>
                </Box>
            </Stack>
            <Box>
                <img
                    src={TrueSigmaImg}
                    alt="true sigma"
                    height={400}
                    width={400}
                    style={{ borderRadius: '50%', boxShadow: '1px 1px 20px 8px green' }}
                ></img>
            </Box>
        </Stack>
    );
};
