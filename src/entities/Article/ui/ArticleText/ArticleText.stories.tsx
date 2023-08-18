import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import ArticleText from './ArticleText';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { ArticleBlockType } from '../../model/types/IArticle';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'entities/ArticleText',
    component: ArticleText,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        block: {
            id: 1,
            type: ArticleBlockType.TEXT,
            title: 'title',
            paragraphs: ['paragraphs 1', 'paragraphs 2'],
        },
    },
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {
        block: {
            id: 1,
            type: ArticleBlockType.TEXT,
            title: 'title',
            paragraphs: ['paragraphs 1', 'paragraphs 2'],
        },
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};
