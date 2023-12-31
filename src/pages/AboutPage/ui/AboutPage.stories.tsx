import type { Meta, StoryObj } from '@storybook/react';

import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import AboutPage from './AboutPage';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};
