import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {ArticleBlockType, ArticleType} from '../../model/types/IArticle';
import ArticleDetails from './ArticleDetails';
import Themes from '@/shared/consts/theme';


const meta = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        id: 1,
    },
    decorators: [storeDecorator({
        article: {
            data: {
                'id': '1',
                'title': 'TypeScript 5.0 and 4.9',
                'subtitle': 'Actual features',
                'img': 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
                'views': '1022',
                'createAt': '26.02.2022',
                'type': [ArticleType.IT],
                'blocks': [
                    {
                        'id': '1',
                        'type': ArticleBlockType.TEXT,
                        'title': 'TypeScript 5.0 and 4.9: evaluate and compare changes',
                        'paragraphs': [
                            'In mid-March 2023, Microsoft announced the release of TypeScript version 5.0. The developers expect a 10-20% performance boost from it, but since it all depends on the codebase and hardware characteristics, they strongly recommend trying these changes.',
                            'In this article, we\'ll take a look at some of the changes in TypeScript 4.9 and 5.0 and compare what\'s new with previous versions. Using code examples, we will try to understand why they were added and how they simplify our life. The article will be useful for experienced developers who often use TypeScript in their work, and for beginners, as we will analyze in detail the solutions to some problems.',
                        ],
                    }],
            },
        },
    })],
};

export const Dark: Story = {
    args: {
        id: 1,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({
        article: {
            data: {
                'id': '1',
                'title': 'TypeScript 5.0 and 4.9',
                'subtitle': 'Actual features',
                'img': 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
                'views': '1022',
                'createAt': '26.02.2022',
                'type': [ArticleType.IT],
                'blocks': [
                    {
                        'id': '1',
                        'type': ArticleBlockType.TEXT,
                        'title': 'TypeScript 5.0 and 4.9: evaluate and compare changes',
                        'paragraphs': [
                            'In mid-March 2023, Microsoft announced the release of TypeScript version 5.0. The developers expect a 10-20% performance boost from it, but since it all depends on the codebase and hardware characteristics, they strongly recommend trying these changes.',
                            'In this article, we\'ll take a look at some of the changes in TypeScript 4.9 and 5.0 and compare what\'s new with previous versions. Using code examples, we will try to understand why they were added and how they simplify our life. The article will be useful for experienced developers who often use TypeScript in their work, and for beginners, as we will analyze in detail the solutions to some problems.',
                        ],
                    }],
            },
        },
    })],
};

export const Loading: Story = {
    args: {
        id: 1,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({
        article: {
            isLoading: true,
            data: {
                'id': '1',
                'title': 'TypeScript 5.0 and 4.9',
                'subtitle': 'Actual features',
                'img': 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
                'views': '1022',
                'createAt': '26.02.2022',
                'type': [ArticleType.IT],
                'blocks': [
                    {
                        'id': '1',
                        'type': ArticleBlockType.TEXT,
                        'title': 'TypeScript 5.0 and 4.9: evaluate and compare changes',
                        'paragraphs': [
                            'In mid-March 2023, Microsoft announced the release of TypeScript version 5.0. The developers expect a 10-20% performance boost from it, but since it all depends on the codebase and hardware characteristics, they strongly recommend trying these changes.',
                            'In this article, we\'ll take a look at some of the changes in TypeScript 4.9 and 5.0 and compare what\'s new with previous versions. Using code examples, we will try to understand why they were added and how they simplify our life. The article will be useful for experienced developers who often use TypeScript in their work, and for beginners, as we will analyze in detail the solutions to some problems.',
                        ],
                    }],
            },
        },
    })],
};

export const Error: Story = {
    args: {
        id: 1,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({
        article: {
            error: 'Error',
            data: {
                'id': '1',
                'title': 'TypeScript 5.0 and 4.9',
                'subtitle': 'Actual features',
                'img': 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
                'views': '1022',
                'createAt': '26.02.2022',
                'type': [ArticleType.IT],
                'blocks': [
                    {
                        'id': '1',
                        'type': ArticleBlockType.TEXT,
                        'title': 'TypeScript 5.0 and 4.9: evaluate and compare changes',
                        'paragraphs': [
                            'In mid-March 2023, Microsoft announced the release of TypeScript version 5.0. The developers expect a 10-20% performance boost from it, but since it all depends on the codebase and hardware characteristics, they strongly recommend trying these changes.',
                            'In this article, we\'ll take a look at some of the changes in TypeScript 4.9 and 5.0 and compare what\'s new with previous versions. Using code examples, we will try to understand why they were added and how they simplify our life. The article will be useful for experienced developers who often use TypeScript in their work, and for beginners, as we will analyze in detail the solutions to some problems.',
                        ],
                    }],
            },
        },
    })],
};


