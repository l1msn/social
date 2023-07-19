import type {Meta, StoryObj} from '@storybook/react';
import {Themes} from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import ArticleImage from './ArticleImage';
import StoreDecorator from 'shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';


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
    },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK), StoreDecorator({})],
};


