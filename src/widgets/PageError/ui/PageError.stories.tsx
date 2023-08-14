import type {Meta, StoryObj} from '@storybook/react';

import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import PageError from './PageError';
import Themes from '@/shared/consts/theme';


const meta = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK)],
};


