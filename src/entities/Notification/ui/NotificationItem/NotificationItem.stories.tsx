import type {Meta, StoryObj} from '@storybook/react';
import {Themes} from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';
import NotificationItem from './NotificationItem';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';


const meta = {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockNotification = {
    'id': '1',
    'title': 'Notification 1',
    'description': 'Something new!',
    'userId': '1',
    'href': '/',
};

export const Light: Story = {
    args: {
        item: mockNotification,
    },
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {
        item: mockNotification,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};

export const DarkHref: Story = {
    args: {
        item: mockNotification,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};


