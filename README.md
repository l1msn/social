# 
<div align="center">
<img alt="social badge" src="https://popmenucloud.com/qrfdaych/27fcae40-3764-43ee-80a9-85ebe4dce296.png">
<img alt="Static Badge" src="https://img.shields.io/badge/build-passing-brightgreen">
<img alt="GitHub commit activity (branch)" src="https://img.shields.io/github/commit-activity/m/l1msn/social">
<img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/l1msn/social">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/l1msn/social">
<img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/l1msn/social/master">
</div>

## Оглавление

- [Обзор проекта](https://github.com/l1msn/social#обзор-проекта)
- [Стек](https://github.com/l1msn/social#стек)
- [Запуск проекта](https://github.com/l1msn/social#запуск-проекта)
- [Скрипты](https://github.com/l1msn/social#скрипты)
- [Netlify и Vercel](https://github.com/l1msn/social#netlify-и-vercel)
- [Архитектура проекта](https://github.com/l1msn/social#архитектура-проекта)
- [Работа с переводами](https://github.com/l1msn/social#работа-c-переводами)
- [Работа с feature-flags](https://github.com/l1msn/social#работа-с-feature-flags)
- [Storybook](https://github.com/l1msn/social#storybook)
- [.loki](https://github.com/l1msn/social#.loki)
- [Тесты](https://github.com/l1msn/social#тесты)
- [Линтинг](https://github.com/l1msn/social#линтинг)
- [Конфигурация проекта](https://github.com/l1msn/social#конфигурация-проекта)
- [CI pipeline](https://github.com/l1msn/social#ci-pipeline)
- [Docker](https://github.com/l1msn/social#docker)
- [Работа с данными](https://github.com/l1msn/social#работа-с-данными)

----

## Обзор проекта

Оценить проект можите по [ссылке](https://melodious-taiyaki-b821a0.netlify.app) 

Проект представляет из себя pet-проект для демонстрации своих навыков
работадателю. 

----

## Стек


| Стэк         | Технологии                                               |
|--------------|----------------------------------------------------------|
| Серверная часть | JavaScript, NodeJS, Express, MicroDB                     |
| Клиентская часть | TypeScript, React, Redux Toolkit\Query, SCSS, HeadlessUI |
| Сборщики | Webpack, Vite                                            |
| Тестирование | React Testing Library, Cypress, Jest, .loki, Unit        |
| Линтеры/Форматирование | ESLint, StyleLint, Prettier                              |
| Дополнительно | Babel, Docker, GitHub Workflow (CI), i18n                |

----

### Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev - запуск сервера + frontend проекта в dev режиме
```
```
docker-compose build - для сборки проета в Docker
docker-compose up - для запуска образа проекта Docker
docker-compose down — для остановики проекта в Docker
```

----

### Скрипты

- `npm run start:dev:webpack` - Запуск frontend проекта на webpack dev server
- `npm run start:dev:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run start:docker` - Запуски образа внутри Docker
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run prettier` - Исправление prettier
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:e2e` - Запуск e2e тестов с Cypress
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:ci:local` - Запуск скриншотных тестов в CI локально
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:report:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:report:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

----

### Netlify и Vercel

Серверная часть размещена на [Vercel](https://vercel.com) - https://social-backend-psi.vercel.app

Клиентская часть размещена на [Netlify](https://app.netlify.com) - https://melodious-taiyaki-b821a0.netlify.app

----

### Архитектура проекта

Проект написан в соответствии с методологией `Feature sliced design`

>[Документация feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

### Работа с переводами

В проекте используется библиотека `i18next` для работы с переводами.
Файлы с переводами хранятся в public/locales.

>[Документация i18next](https://react.i18next.com/)


В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`
5) Pages с CI (tests/build) на GitHub - [CI REPORT](https://l1msn.github.io/social/)

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

### Работа с feature-flags

Разрешено использование `feature flags` только с помощью хелпера toggleFeatures

в него передается объект с опциями

```typescript jsx
{
   name: 'название фича-флага',
   on: 'функция, которая отработает после Включения фичи',
   of: 'функция, которая отработает после Выключения фичи'
}
```

Для автоматического удаления фичи использовать скрипт `remove-feature.ts`,
который принимает 2 аргумента
1. Название удаляемого фича-флага
2. Состояние (on\off)

----

### Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью `storybook-addon-mock`.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ThemeButton from '../consts/ThemeButton';
import '@/app/styles/index.scss';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import ButtonSize from '../consts/ButtonSize';
import Themes from '@/shared/consts/theme';

const meta = {
   title: 'shared/Button',
   component: Button,
   tags: ['autodocs'],
   argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
```


----

### .loki

Для Скриншотного тестирование используется библиотека `.loki`, 
освнованный на образов со storybook

>[Подробнее о loki](https://loki.js.org])

----

### Тесты

В проекте используются 4 вида тестов:
>1) Обычные unit тесты на jest - `npm run test:unit`
>2) Тесты на компоненты с React testing library -`npm run test:unit`
>3) Скриншотное тестирование с loki `npm run test:ui`
>4) e2e тестирование с Cypress `npm run test:e2e`

----

### Линтинг

В проекте используется `eslint` для проверки `typescript` кода и `stylelint` для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-l1msn-plugin*,
который содержит 3 правила
>1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
>2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
>3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером


----


### Конфигурация проекта

Для разработки проект содержит 2 конфига:
>1. `Webpack` - ./config/build - в основном используется для создание build'ов
>2. `vite `- vite.config.ts - в основном используется для dev'а

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - `babel`
- /config/build - конфигурация `webpack`
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

### CI pipeline

Конфигурация `github actions` находится в .github/workflows.
В [Github Actions CI](https://github.com/l1msn/social/actions) прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

Детальные результаты Скриншотного и Unit тестирования c графическим интерфейсом тестирования
вынесены в [Github Pages](https://l1msn.github.io/social/)

----

### Docker

Создан образ проекта через `Docker Compose` с разделенными контейнирами для server и client

>[Подробнее о docker-compose](https://docs.docker.com/compose/gettingstarted/)

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью `redux toolkit`.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----