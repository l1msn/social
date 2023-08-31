import { Meta, StoryObj } from '@storybook/react';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Themes } from '@/app/providers/ThemeProvider';
import SettingsPage from './SettingsPage';

const meta = {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SettingsPage>;

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
