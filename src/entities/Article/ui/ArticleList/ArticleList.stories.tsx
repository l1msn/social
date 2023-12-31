import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import ArticleList from './ArticleList';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {
    ArticleBlockType,
    ArticleType,
    IArticle,
} from '../../model/types/IArticle';
import ArticleView from '../../model/types/ArticleView';
import Themes from '@/shared/consts/theme';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';
import featureFlagsDecorator from '@/shared/config/storybook/featureFlagsDecorator/featureFlagsDecorator';

const meta = {
    title: 'entities/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData: IArticle[] = [
    {
        id: '1',
        title: 'TypeScript 5.0 and 4.9',
        subtitle: 'Actual features',
        img: 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
        views: '1022',
        createdAt: '26.02.2022',
        user: {
            id: '2',
            avatar: 'https://imgur.com/IyES7O4.png',
            username: 'username',
        },
        type: [ArticleType.IT],
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'TypeScript 5.0 and 4.9: evaluate and compare changes',
                paragraphs: [
                    'In mid-March 2023, Microsoft announced the release of TypeScript version 5.0. The developers expect a 10-20% performance boost from it, but since it all depends on the codebase and hardware characteristics, they strongly recommend trying these changes.',
                    "In this article, we'll take a look at some of the changes in TypeScript 4.9 and 5.0 and compare what's new with previous versions. Using code examples, we will try to understand why they were added and how they simplify our life. The article will be useful for experienced developers who often use TypeScript in their work, and for beginners, as we will analyze in detail the solutions to some problems.",
                ],
            },
        ],
    },
];

export const Light: Story = {
    args: {
        articles: mockData,
    },
    decorators: [storeDecorator({})],
};

export const DarkRedesigned: Story = {
    args: {
        articles: mockData,
    },
    decorators: [
        themeRedesignedDecorator(Themes.DARK),
        storeDecorator({}),
        featureFlagsDecorator({
            isAppRedesigned: true,
        }),
    ],
};

export const Dark: Story = {
    args: {
        articles: mockData,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};

export const DarkIsLoading: Story = {
    args: {
        isLoading: true,
        articles: mockData,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};

export const DarkIsLoadingShelf: Story = {
    args: {
        view: ArticleView.SHELF,
        isLoading: true,
        articles: mockData,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};

export const DarkIsLoadingList: Story = {
    args: {
        view: ArticleView.LIST,
        isLoading: true,
        articles: mockData,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};
