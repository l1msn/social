import type {Meta, StoryObj} from '@storybook/react';
import 'app/styles/index.scss';
import ThemeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';
import CommentList from './CommentList';


const meta = {
    title: 'entities/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
    },
};


export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};
