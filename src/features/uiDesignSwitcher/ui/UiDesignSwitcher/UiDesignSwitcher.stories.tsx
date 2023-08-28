import {Meta, StoryObj} from '@storybook/react';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '@/app/providers/ThemeProvider';
import UiDesignSwitcher from './UiDesignSwitcher';

const meta = {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UiDesignSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};