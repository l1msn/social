import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import Themes from '@/shared/consts/theme';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';

const meta = {
    title: 'shared/redesigned/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        text: 'text',
        title: 'title',
    },
};

export const DarkError: Story = {
    args: {
        text: 'text',
        title: 'title',
        variant: 'error',
    },
};

export const DarkS: Story = {
    args: {
        size: 's',
        text: 'text',
        title: 'title',
    },
};

export const DarkM: Story = {
    args: {
        size: 'm',
        text: 'text',
        title: 'title',
    },
};

export const DarkL: Story = {
    args: {
        size: 'l',
        text: 'text',
        title: 'title',
    },
};
