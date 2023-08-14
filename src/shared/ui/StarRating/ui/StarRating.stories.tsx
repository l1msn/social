import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import StarRating from './StarRating';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';

import Themes from '@/shared/consts/theme';

const meta = {
    title: 'widget/StarRating',
    component: StarRating,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;


export const LightFree: Story = {
    args: {
        size: 50,
    },
    decorators: [storeDecorator({})],
};

export const DarkFree: Story = {
    args: {
        size: 50,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};


