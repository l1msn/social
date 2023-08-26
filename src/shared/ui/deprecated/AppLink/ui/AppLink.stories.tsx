import type { Meta, StoryObj } from '@storybook/react';

import AppLink from './AppLink';
import AppLinkThemes from '../consts/AppLinkThemes';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkThemes.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkThemes.SECONDARY,
    },
};
