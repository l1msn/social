import type {Meta, StoryObj} from '@storybook/react';
import {Themes} from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import themeDecorator from '../../../shared/config/storybook/themeDecorator/themeDecorator';
import MainPage from './MainPage';


const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK)],
};


