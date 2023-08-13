import type {Meta, StoryObj} from '@storybook/react';
import Button from './Button';
import ThemeButton from '../consts/ThemeButton';
import '@/app/styles/index.scss';
import themeDecorator from '../../../config/storybook/themeDecorator/themeDecorator';
import SizeButton from '../consts/SizeButton';
import Themes from '@/shared/consts/theme';

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

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: SizeButton.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: SizeButton.XL,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [themeDecorator(Themes.DARK)],
};

export const WithlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.WITHLINE,
    },
};

export const WithlineDarkDisabled: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.WITHLINE,
        disabled: true,
    },
};

