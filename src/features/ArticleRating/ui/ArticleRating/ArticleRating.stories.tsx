import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import ArticleRating from './ArticleRating';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'pages/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        mockData: [
            {
                url: __API__ + '/article-ratings?userId=1&articleId=1',
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        id: '1',
    },
    decorators: [
        storeDecorator({
            user: {
                authData: {
                    id: 1,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    args: {
        id: '1',
    },
    decorators: [
        themeDecorator(Themes.DARK),
        storeDecorator({
            user: {
                authData: {
                    id: 1,
                },
            },
        }),
    ],
};

export const DarkFree: Story = {
    args: {
        id: '1',
    },
    decorators: [
        themeDecorator(Themes.DARK),
        storeDecorator({
            user: {
                authData: {
                    id: 1,
                },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: __API__ + '/article-ratings?userId=1&articleId=1',
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};
