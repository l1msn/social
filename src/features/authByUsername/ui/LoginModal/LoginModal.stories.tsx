import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import LoginModal from './LoginModal';
import ThemeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '@/app/providers/ThemeProvider';
import StoreDecorator from '../../../../shared/config/storybook/storeDecorator/storeDecorator';


const meta = {
    title: 'feature/LoginModal',
    component: LoginModal,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        isOpen: true,
    },
    decorators: [StoreDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};

export const Dark: Story = {
    args: {
        isOpen: true,
    },
    decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};