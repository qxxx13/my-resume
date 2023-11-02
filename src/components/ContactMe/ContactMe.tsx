import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';

export const ContactMe: React.FC = () => {
    return (
        <>
            <Typography variant="h4">Свяжитесь со мной</Typography>
            <Stack flexDirection="row" useFlexGap>
                <Box>
                    <Card sx={{ width: 400, height: 150 }}></Card>
                    <Card sx={{ width: 400, height: 150 }}></Card>
                    <Card sx={{ width: 400, height: 150 }}></Card>
                </Box>
            </Stack>
        </>
    );
};
