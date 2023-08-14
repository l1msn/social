import type {Meta, StoryObj} from '@storybook/react';

import ArticleImage from './ArticleImage';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {ArticleBlockType} from '../../model/types/IArticle';
import Themes from '@/shared/consts/theme';


const meta = {
    title: 'entities/ArticleImage',
    component: ArticleImage,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        block: {
            id: 1,
            type: ArticleBlockType.IMAGE,
            title: 'image',
            src: 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
        },
    },
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {
        block: {
            id: 1,
            type: ArticleBlockType.IMAGE,
            title: 'image',
            src: 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
        },
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};

export const DarkFree: Story = {
    args: {
        block: {
            id: 1,
            type: ArticleBlockType.IMAGE,
            title: 'image',
            src: 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
        },
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};


