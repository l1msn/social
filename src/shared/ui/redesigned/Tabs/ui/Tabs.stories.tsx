import type { Meta, StoryObj } from '@storybook/react';

import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';
import Tabs from './Tabs';
import { action } from '@storybook/addon-actions';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/redesigned/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        tabs: [
            {
                value: 'value 1',
                content: 'content 1',
            },
            {
                value: 'value 2',
                content: 'content 2',
            },
        ],
        value: 'tab 2',
        onTabClick: action('Click Tab 2'),
    },
};
