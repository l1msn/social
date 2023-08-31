import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import LoginForm from './LoginForm';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        storeDecorator({
            loginForm: { username: '123', password: 'asd' },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        themeDecorator(Themes.DARK),
        storeDecorator({
            loginForm: { username: '123', password: 'asd' },
        }),
    ],
};

export const DarkError: Story = {
    args: {},
    decorators: [
        themeDecorator(Themes.DARK),
        storeDecorator({
            loginForm: { username: '123', password: 'asd', error: 'ERROR!' },
        }),
    ],
};

export const DarkLoading: Story = {
    args: {},
    decorators: [
        themeDecorator(Themes.DARK),
        storeDecorator({
            loginForm: { username: '123', password: 'asd', isLoading: true },
        }),
    ],
};
