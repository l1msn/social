import type {Meta, StoryObj} from '@storybook/react';
import 'app/styles/index.scss';
import Avatar from './Avatar';
import ThemeDecorator from '../../../shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '../../../app/providers/ThemeProvider';

const meta = {
    title: 'widget/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        alt: 'not found avatar',
        size: 150,
        src: 'https://i.imgur.com/IyES7O4.png',
    },
};

export const LightBig: Story = {
    args: {
        alt: 'not found avatar',
        size: 400,
        src: 'https://i.imgur.com/IyES7O4.png',
    },
};

export const Dark: Story = {
    args: {
        alt: 'not found avatar',
        size: 150,
        src: 'https://i.imgur.com/IyES7O4.png',
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};