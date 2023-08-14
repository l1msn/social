import type {Meta, StoryObj} from '@storybook/react';

import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import AddCommentForm from './AddCommentForm';
import {action} from '@storybook/addon-actions';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import Themes from '@/shared/consts/theme';


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
    decorators: [storeDecorator({})],
};


export const Dark: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};
