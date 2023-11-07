import { Box, Typography } from '@mui/material';
import React from 'react';

import WebDevelopmentIcon from '../../../common/icons/WebDevelopmentIcon.png';
import { WhatIDoCard } from './WhatIDoCard';
import { WhatIDoDescriptions } from './WhatIDoDescription';

export const WhatIDoList: React.FC = () => {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
                Чем я занимаюсь
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: 25 }}>
                {WhatIDoDescriptions.map((description, index) => (
                    <WhatIDoCard
                        iconUrl={WebDevelopmentIcon}
                        Title={description.Title}
                        Description={description.Description}
                        key={index}
                    />
                ))}
            </Box>
        </Box>
    );
};
