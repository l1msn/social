import type {Meta, StoryObj} from '@storybook/react';

import Navbar from './Navbar';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import Themes from '@/shared/consts/theme';


const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Navbar>;

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


