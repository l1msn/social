import type {Meta, StoryObj} from '@storybook/react';
import {Themes} from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import ArticleText from './ArticleText';
import StoreDecorator from 'shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';


const meta = {
    title: 'entities/ArticleText',
    component: ArticleText,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleText>;

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


