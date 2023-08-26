import type { Meta, StoryObj } from '@storybook/react';
import AppLogo from './AppLogo';
import themeRedesignDecorator from '@/shared/config/storybook/themeRedesignDecorator/themeRedesignDecorator';
import Themes from '@/shared/consts/theme';
import '@/app/styles/index.scss';

const meta = {
    title: 'shared/AppLogoRedesigned',
    component: AppLogo,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignDecorator(Themes.DARK)],
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Primary120: Story = {
    args: {
        size: 120,
    },
};
