import { CircularProgress, keyframes, styled } from '@mui/material';

type StyledCircularProgressProps = {
    toValue: string;
};

const CircularProgressKeyFrame = (value: string) =>
    keyframes({
        from: {
            strokeDashoffset: '126.9px',
        },
        to: {
            strokeDashoffset: value,
        },
    });

export const StyledCircularProgress = styled(CircularProgress)<StyledCircularProgressProps>((props) => ({
    '& .MuiCircularProgress-circleDeterminate': {
        animation: `${CircularProgressKeyFrame(props.toValue)} 2s linear forwards`,
    },
}));
