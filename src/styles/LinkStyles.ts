import { Link, styled } from '@mui/material';

export const LinkButtonStyle = styled(Link)({
    padding: '10px',
    display: 'flex',
    width: 'fit-content',
    transition: '0.3s',
    borderRadius: 2,
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: '#90caf9',
        color: 'white',
    },
});
