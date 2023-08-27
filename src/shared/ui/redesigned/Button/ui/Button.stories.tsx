import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import '@/app/styles/index.scss';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/redesigned/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
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
