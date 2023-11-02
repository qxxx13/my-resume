import { Box, LinearProgress, LinearProgressProps, Stack, Typography } from '@mui/material';

export const LinearProgressWithLabel = (props: LinearProgressProps & { value: number; description: string }) => {
    return (
        <>
            <Typography variant="body1">{props.description}</Typography>
            <Stack alignItems="center" flexDirection="row" sx={{ mb: 2 }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} sx={{ height: 8, borderRadius: 2 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">
                        {props.value}%
                    </Typography>
                </Box>
            </Stack>
        </>
    );
};
