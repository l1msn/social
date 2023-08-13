import type {Meta, StoryObj} from '@storybook/react';

import themeDecorator from '../../../config/storybook/themeDecorator/themeDecorator';
import Skeleton from './Skeleton';
import Themes from '@/shared/consts/theme';


const meta = {
    title: 'widget/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Skeleton>;

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

export const DarkCircle: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
    decorators: [themeDecorator(Themes.DARK)],
};

export const LightCircle: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
};


