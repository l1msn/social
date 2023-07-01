import type {Meta, StoryObj} from '@storybook/react';
import Button from './Button';
import ThemeButton from '../consts/ThemeButton';
import 'app/styles/index.scss';
import themeDecorator from '../../../config/storybook/themeDecorator/themeDecorator';
import {Themes} from '../../../../app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [themeDecorator(Themes.DARK)],
};

