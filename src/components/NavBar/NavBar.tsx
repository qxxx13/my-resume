import { AppBar, Stack, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

export const NavBar: React.FC = () => {
    const [tabValue, setTabvalue] = useState(1);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabvalue(newValue);
    };

    return (
        <AppBar sx={{ width: '100%', height: 69 }}>
            <Stack sx={{ height: 69 }} alignItems="center" justifyContent="center">
                <Tabs value={tabValue} onChange={handleTabChange}>
                    <Tab label="Начало" value={1} />
                    <Tab label="Обо мне" value={2} />
                    <Tab label="Навыки" value={3} />
                    <Tab label="Опыт" value={4} />
                    <Tab label="Проекты" value={5} />
                    <Tab label="Контакты" value={6} />
                </Tabs>
            </Stack>
        </AppBar>
    );
};
