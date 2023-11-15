import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2978ff',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#100e17',
            paper: '#0e2c5c',
        },
    },
});
