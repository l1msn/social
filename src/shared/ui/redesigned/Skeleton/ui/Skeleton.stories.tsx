import type { Meta, StoryObj } from '@storybook/react';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';
import Skeleton from './Skeleton';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/redesigned/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const DarkCircle: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
};
