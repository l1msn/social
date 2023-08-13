import type {Meta, StoryObj} from '@storybook/react';
import Sidebar from './Sidebar';
import themeDecorator from '../../../../shared/config/storybook/themeDecorator/themeDecorator';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {

    },
    decorators: [storeDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};

export const Dark: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};


