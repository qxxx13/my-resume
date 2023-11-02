import { Link, styled } from '@mui/material';

export const StyledLink = styled(Link)({
    display: 'flex',
    textDecoration: 'none',
    width: 'fit-content',
    color: 'white',
    alignItems: 'center',
    marginTop: 10,
    '&:hover': {
        color: 'blue',
    },
});

export const LinkButtonStyle = styled(Link)({
    padding: '10px 10px',
    marginRight: 10,
    transition: '0.3s',
    borderRadius: 2,
    textAlign: 'center',
    '&:hover': {
        backgroundColor: 'white',
        color: 'green',
    },
});
