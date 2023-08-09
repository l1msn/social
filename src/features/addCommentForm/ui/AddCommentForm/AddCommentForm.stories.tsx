import type {Meta, StoryObj} from '@storybook/react';

import ThemeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '@/app/providers/ThemeProvider';
import AddCommentForm from './AddCommentForm';
import {action} from '@storybook/addon-actions';
import StoreDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';


const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [StoreDecorator({})],
};


export const Dark: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({})],
};
