import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '@/app/providers/ThemeProvider';
import CommentCard from './CommentCard';


const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello',
            user: {
                id: '1',
                username: 'username',
                avatar: 'https://cdn-icons-png.flaticon.com/512/2304/2304226.png',
            },
        },
    },
};


export const Dark: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello',
            user: {
                id: '1',
                username: 'username',
                avatar: 'https://cdn-icons-png.flaticon.com/512/2304/2304226.png',
            },
        },
    },
    decorators: [themeDecorator(Themes.DARK)],
};

export const DarkIsLoading: Story = {
    args: {
        isLoading: true,
        comment: {
            id: '1',
            text: 'hello',
            user: {
                id: '1',
                username: 'username',
                avatar: 'https://cdn-icons-png.flaticon.com/512/2304/2304226.png',
            },
        },
    },
    decorators: [themeDecorator(Themes.DARK)],
};
