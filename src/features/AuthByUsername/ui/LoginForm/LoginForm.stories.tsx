import type {Meta, StoryObj} from '@storybook/react';
import 'app/styles/index.scss';
import LoginForm from './LoginForm';
import ThemeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';
import StoreDecorator from '../../../../shared/config/storybook/storeDecorator/storeDecorator';


const meta = {
    title: 'feature/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};

export const DarkError: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({
        loginForm: {username: '123', password: 'asd', error: 'ERROR!'},
    })],
};

export const DarkLoading: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({
        loginForm: {username: '123', password: 'asd', isLoading: true},
    })],
};
