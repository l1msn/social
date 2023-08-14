import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import NotificationList from './NotificationList';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import Themes from '@/shared/consts/theme';

const mockNotification = [{
    'id': '1',
    'title': 'Notification 1',
    'description': 'Something new!',
    'userId': '1',
    'href': '/',
},
{
    'id': '2',
    'title': 'Notification 2',
    'description': 'Something new!',
    'userId': '2',
    'href': '/',
},
{
    'id': '3',
    'title': 'Notification 3',
    'description': 'Something new!',
    'userId': '2',
    'href': '/',
}];

const meta = {
    title: 'entities/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    argTypes: {
    },
    parameters: {
        mockData: [
            {
                url: __API__ + '/notifications',
                method: 'GET',
                status: 200,
                response: mockNotification,
            },
        ],
    },
} satisfies Meta<typeof NotificationList>;

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


