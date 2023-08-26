import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import '@/app/styles/index.scss';
import themeRedesignDecorator from '@/shared/config/storybook/themeRedesignDecorator/themeRedesignDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/ButtonRedesigned',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignDecorator(Themes.DARK)],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        variant: 'clear',
        children: 'Text',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Text',
    },
};
