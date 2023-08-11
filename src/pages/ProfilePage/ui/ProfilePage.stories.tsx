import type {Meta, StoryObj} from '@storybook/react';
import {Themes} from '@/app/providers/ThemeProvider';

import themeDecorator from '../../../shared/config/storybook/themeDecorator/themeDecorator';
import ProfilePage from './ProfilePage';
import storeDecorator from '../../../shared/config/storybook/storeDecorator/storeDecorator';


const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ProfilePage>;

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


