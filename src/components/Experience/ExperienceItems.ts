import { ExperienceCardProps } from './ExperienceCard';

export const EducationalExperience: ExperienceCardProps[] = [
    {
        title: 'ТиДГТУ в г. Азове',
        years: '2020-2024',
        description:
            'Донской государственный технический университет (ДГТУ) – крупнейший на Юге России, динамично развивающийся научно-образовательный комплекс.',
    },
    {
        title: 'React-путь самурая',
        years: '2022',
        description: 'Курс изучения React с использованием классовых компонентов',
    },
    {
        title: 'React JS фундаментальный курс',
        years: '2023',
        description: 'Фундаментальный курс по React, который позоваляет понять основные функции React',
    },
];

export const WorkExperience: ExperienceCardProps[] = [
    {
        title: 'Сервисный центр',
        years: '1.06.23 - 1.09.23',
        description: 'Список обязанностей:',
        responsibilities: [
            'Разработка новых частей приложения',
            'Проверка на кроссбраузерность и адаптивность',
            'Продвижение рекламы',
            'Работа с клиентами',
        ],
    },
];
