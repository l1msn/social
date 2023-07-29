import type {Meta, StoryObj} from '@storybook/react';
import {Themes} from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import themeDecorator from '../../../../shared/config/storybook/themeDecorator/themeDecorator';
import ArticlePage from './ArticlePage';
import StoreDecorator from '../../../../shared/config/storybook/storeDecorator/storeDecorator';


const meta = {
    title: 'pages/ArticlePage',
    component: ArticlePage,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticlePage>;

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


