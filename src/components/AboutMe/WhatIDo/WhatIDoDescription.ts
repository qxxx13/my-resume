import JestIcon from '../../../common/icons/JestIcon.svg';
import ReactIcon from '../../../common/icons/ReactIcon.svg';
import ResponsiveDesignIcon from '../../../common/icons/ResponsiveDesignIcon.svg';
import { WhatIDoDescriptionType } from '../../../models/WhatIDoDescriptionModel';

export const WhatIDoDescriptions: WhatIDoDescriptionType[] = [
    {
        title: 'Web-Разработка',
        description: 'Разработка Web-приложений с помощью React',
        iconUrl: ReactIcon,
    },
    {
        title: 'Адаптивность',
        description: 'Обеспечение оптимального отображения интерфейсов на устройствах с разным разрешением экранов',
        iconUrl: ResponsiveDesignIcon,
    },
    {
        title: 'Тестирование',
        description: 'Тестирование web-сервисов при помощи jest',
        iconUrl: JestIcon,
    },
];
