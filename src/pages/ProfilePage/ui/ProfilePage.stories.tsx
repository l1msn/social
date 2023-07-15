import type {Meta, StoryObj} from '@storybook/react';
import {Themes} from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import themeDecorator from '../../../shared/config/storybook/themeDecorator/themeDecorator';
import ProfilePage from './ProfilePage';
import StoreDecorator from '../../../shared/config/storybook/storeDecorator/storeDecorator';


const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightError: Story = {
    args: {
    },
    decorators: [StoreDecorator({})],
};

export const DarkError: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK), StoreDecorator({})],
};


