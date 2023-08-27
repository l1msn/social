import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';
import Input from './Input';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/redesigned/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        placeholder: 'input',
        value: 'input',
    },
};
