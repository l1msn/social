import type { Meta, StoryObj } from '@storybook/react';

import SidebarItem from './SidebarItem';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import UserIcon from '@/shared/assets/icons/user-icon.svg';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';

import Themes from '@/shared/consts/theme';

const meta = {
    title: 'widget/SidebarItem',
    component: SidebarItem,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightProfile: Story = {
    args: {
        item: {
            path: '#',
            Icon: UserIcon,
            text: 'Profile',
        },
        collapsed: false,
    },
    decorators: [
        storeDecorator({
            loginForm: { username: '123', password: 'asd' },
        }),
    ],
};

export const DarkProfile: Story = {
    args: {
        item: {
            path: '#',
            Icon: UserIcon,
            text: 'Profile',
        },
        collapsed: false,
    },
    decorators: [
        themeDecorator(Themes.DARK),
        storeDecorator({
            loginForm: { username: '123', password: 'asd' },
        }),
    ],
};

export const DarkProfileCollapsed: Story = {
    args: {
        item: {
            path: '#',
            Icon: UserIcon,
            text: 'Profile',
        },
        collapsed: true,
    },
    decorators: [
        themeDecorator(Themes.DARK),
        storeDecorator({
            loginForm: { username: '123', password: 'asd' },
        }),
    ],
};
