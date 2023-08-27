import type { Meta, StoryObj } from '@storybook/react';
import AppLink from './AppLink';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';
import Themes from '@/shared/consts/theme';
import '@/app/styles/index.scss';

const meta = {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
    decorators: [themeRedesignedDecorator(Themes.DARK)],
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
