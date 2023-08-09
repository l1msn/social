import type {Meta, StoryObj} from '@storybook/react';
import {Themes} from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';
import ArticleCode from './ArticleCode';
import StoreDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {ArticleBlockType} from '../../model/types/IArticle';


const meta = {
    title: 'entities/ArticleCode',
    component: ArticleCode,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        block: {
            id: 1,
            type: ArticleBlockType.CODE,
            code: 'console.log(123)',
        },
    },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {
        block: {
            id: 1,
            type: ArticleBlockType.CODE,
            code: 'console.log(123)',
        },
    },
    decorators: [themeDecorator(Themes.DARK), StoreDecorator({})],
};


