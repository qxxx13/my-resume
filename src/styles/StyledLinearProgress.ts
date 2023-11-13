import { keyframes, LinearProgress, styled } from '@mui/material';

type StyledLinearProgressProps = {
    toValue: string;
};

const LinearProgressKeyFrame = (value: string) =>
    keyframes({
        from: {
            left: '-35%',
            right: '100%',
        },
        to: {
            left: '0%',
            right: `calc(100% - ${value})`,
        },
    });

export const StyledLinearProgress = styled(LinearProgress)<StyledLinearProgressProps>((props) => ({
    '& .MuiLinearProgress-bar1Indeterminate': {
        width: 'auto',
        animation: `${LinearProgressKeyFrame(props.toValue)} 2s linear forwards`,
    },
    '& .MuiLinearProgress-bar2Indeterminate': {
        display: 'none',
    },
}));
