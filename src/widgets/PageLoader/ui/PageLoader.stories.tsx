import type { Meta, StoryObj } from '@storybook/react';

import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import PageLoader from './PageLoader';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'widget/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Themes.DARK)],
};
