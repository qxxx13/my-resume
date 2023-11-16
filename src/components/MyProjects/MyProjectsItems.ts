import FilmsApiAppImg from '../../common/img/ProjectsImg/FilmsApi-App.png';
import IndexTestImg from '../../common/img/ProjectsImg/Index-Test.png';
import RickAndMortyAppImg from '../../common/img/ProjectsImg/RickAndMorty-App.png';
import { MyProjectsType } from '../../models/MyProjectsModel';

export const MyProjectsItems: MyProjectsType[] = [
    {
        id: 1,
        name: 'Films-Api-App',
        description:
            'Этот проект был создан с помощью Create React App, с использованием Redux и Redux Toolkit TS шаблон. Это приложение позволяет пользователю производить поиск по базе данных kinopoiskapiunofficial, сортировать и просматривать результат. При нажатии на карточку фильма, пользователь попадает на страницу описания фильма.',
        gitHubLink: 'https://github.com/qxxx13/films-api-app',
        livePreviewLink: 'https://qxxx13.github.io/films-api-app/',
        coreTechnologies: ['React', 'Redux', 'MUI', 'Redux-Saga', 'Axios', 'React-Router-Dom'],
        img: FilmsApiAppImg,
    },
    {
        id: 2,
        name: 'Index-Test',
        description:
            'Этот проект был создан с помощью Create React App, с использованием Context, TS шаблон. Это приложение позволяет пользователю просматривать продукты из базы данных Platzi Fake Store API. При нажатии на карточку, пользователь попадает на страницу описания продукта. Реализована кнопка смены вида карточек, информация о текущем виде карточек сохраняется в localStorage. Дизайн был взят из макета в Figma',
        gitHubLink: 'https://github.com/qxxx13/index-test',
        livePreviewLink: 'https://qxxx13.github.io/index-test/',
        coreTechnologies: ['React', 'React-Context', 'MUI', 'Axios'],
        img: IndexTestImg,
    },
    {
        id: 3,
        name: 'RickAndMorty-App',
        description:
            'Этот проект был создан с помощью Create React App, с использованием Apollo Client TS шаблон. Это приложение позволяет пользователю производить поиск по базе данных Rick And Morty API. На каждой кароточке персонажа есть информация о том, в каких эпизодах он участвовал, его статус, пол и раса.',
        gitHubLink: 'https://github.com/qxxx13/RickAndMorty-app',
        livePreviewLink: 'https://qxxx13.github.io/RickAndMorty-app/',
        coreTechnologies: ['React', 'Apollo client', 'MUI', 'Axios'],
        img: RickAndMortyAppImg,
    },
];
