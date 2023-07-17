import type {Meta, StoryObj} from '@storybook/react';
import 'app/styles/index.scss';
import Sidebar from './Sidebar';
import themeDecorator from '../../../../shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '../../../../app/providers/ThemeProvider';
import storeDecorator from 'shared/config/storybook/storeDecorator/storeDecorator';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {

    },
    decorators: [storeDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};

export const Dark: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({
        loginForm: {username: '123', password: 'asd'},
    })],
};


