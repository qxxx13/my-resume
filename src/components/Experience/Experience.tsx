import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';

import mainPageBgImg from '../../common/img/MainPageImg/MainPageBGImg.jpg';

export const Experience: React.FC = () => {
    return (
        <Stack flexDirection="row" useFlexGap justifyContent="space-between">
            <img src={mainPageBgImg} alt="background" className="Expirience-bg" />
            <Box sx={{ width: '50%' }}>
                <Typography variant="h4" textAlign="center">
                    Образование/курсы
                </Typography>
                <Stack alignItems="center">
                    <Card sx={{ width: 450, height: 150, padding: '26px 30px', mt: 2 }} elevation={10}>
                        <Typography variant="h5">ТиДГТУ в г. Азове</Typography>
                        <Typography variant="body1">2020-2024</Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore ullam molestias
                            consectetur dicta modi, vitae impedit hic natus corrupti omnis, minima eaque dolores, id sed
                            exercitationem sint! Hic, suscipit.
                        </Typography>
                    </Card>

                    <Card sx={{ width: 450, height: 150, padding: '26px 30px', mt: 2 }} elevation={10}>
                        <Typography variant="h5">React-путь самурая</Typography>
                        <Typography variant="body1">2022</Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore ullam molestias
                            consectetur dicta modi, vitae impedit hic natus corrupti omnis, minima eaque dolores, id sed
                            exercitationem sint! Hic, suscipit.
                        </Typography>
                    </Card>

                    <Card sx={{ width: 450, height: 150, padding: '26px 30px', mt: 2 }} elevation={10}>
                        <Typography variant="h5">React JS фундаментальный курс</Typography>
                        <Typography variant="body1">2023</Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore ullam molestias
                            consectetur dicta modi, vitae impedit hic natus corrupti omnis, minima eaque dolores, id sed
                            exercitationem sint! Hic, suscipit.
                        </Typography>
                    </Card>
                </Stack>
            </Box>
            <Box sx={{ width: '50%' }}>
                <Typography variant="h4" textAlign="center">
                    Опыт работы
                </Typography>
                <Stack alignItems="center">
                    <Card sx={{ width: 450, height: 150, padding: '26px 30px', mt: 2 }} elevation={10}>
                        <Typography variant="h5">Сервисный центр</Typography>
                        <Typography variant="body1">1.06.23-21.09.23</Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore ullam molestias
                            consectetur dicta modi, vitae impedit hic natus corrupti omnis, minima eaque dolores, id sed
                            exercitationem sint! Hic, suscipit.
                        </Typography>
                    </Card>
                </Stack>
            </Box>
        </Stack>
    );
};
