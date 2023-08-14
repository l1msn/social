import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import LoginModal from './LoginModal';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import Themes from '@/shared/consts/theme';


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
    decorators: [storeDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};

export const Dark: Story = {
    args: {
        isOpen: true,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};
