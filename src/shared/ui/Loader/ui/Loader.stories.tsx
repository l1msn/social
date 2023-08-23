import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Loader from './Loader';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';

import Themes from '@/shared/consts/theme';

const meta = {
    title: 'widget/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Themes.DARK)],
};
