import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Avatar from './Avatar';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';

import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/redesigned/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        alt: 'not found avatar',
        size: 150,
        src: 'https://i.imgur.com/IyES7O4.png',
    },
};
