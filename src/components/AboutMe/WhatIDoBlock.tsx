import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

import WebDevelopmentIcon from '../../common/icons/AboutMePageIcons/WebDevelopmentIcon.png';

export const WhatiDoBlock: React.FC = () => {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
                Чем я занимаюсь
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: 25 }}>
                <Card elevation={10} sx={{ maxWidth: 350, maxHeight: 250 }}>
                    <CardMedia
                        component="img"
                        alt="webdevelopmentIcon"
                        image={WebDevelopmentIcon}
                        sx={{ width: 50, height: 50, paddingLeft: 2 }}
                    />
                    <CardContent>
                        <Typography variant="h4">Web-разработка</Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic est illo quisquam quia
                            maxime perspiciatis ratione sequi officia veritatis atque, ex consequatur placeat
                            praesentium, voluptatibus esse deserunt ab vel?
                        </Typography>
                    </CardContent>
                </Card>
                <Card elevation={10} sx={{ maxWidth: 350, maxHeight: 250 }}>
                    <CardMedia
                        component="img"
                        alt="webdevelopmentIcon"
                        image={WebDevelopmentIcon}
                        sx={{ width: 50, height: 50, paddingLeft: 2 }}
                    />
                    <CardContent>
                        <Typography variant="h4">Web-разработка</Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic est illo quisquam quia
                            maxime perspiciatis ratione sequi officia veritatis atque, ex consequatur placeat
                            praesentium, voluptatibus esse deserunt ab vel?
                        </Typography>
                    </CardContent>
                </Card>
                <Card elevation={10} sx={{ maxWidth: 350, maxHeight: 250 }}>
                    <CardMedia
                        component="img"
                        alt="webdevelopmentIcon"
                        image={WebDevelopmentIcon}
                        sx={{ width: 50, height: 50, paddingLeft: 2 }}
                    />
                    <CardContent>
                        <Typography variant="h4">Web-разработка</Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic est illo quisquam quia
                            maxime perspiciatis ratione sequi officia veritatis atque, ex consequatur placeat
                            praesentium, voluptatibus esse deserunt ab vel?
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};
