import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import ThemeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '@/app/providers/ThemeProvider';
import Input from './Input';


const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        placeholder: 'input',
        value: 'input',
    },
};

export const Dark: Story = {
    args: {
        placeholder: 'input',
        value: 'input',
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};
