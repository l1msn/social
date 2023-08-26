import type { Meta, StoryObj } from '@storybook/react';
import AppLink from './AppLink';
import themeRedesignDecorator from '@/shared/config/storybook/themeRedesignDecorator/themeRedesignDecorator';
import Themes from '@/shared/consts/theme';
import '@/app/styles/index.scss';

const meta = {
    title: 'shared/AppLinkRedesigned',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
    decorators: [themeRedesignDecorator(Themes.DARK)],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDark: Story = {
    args: {
        children: 'Link',
        variant: 'primary',
    },
};

export const RedDark: Story = {
    args: {
        children: 'Link',
        variant: 'red',
    },
};
