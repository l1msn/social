import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import Card from './Card';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Text} from '@/shared/ui/Text';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'widget/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        children: <Text title={'Title'} text={'text'} />,
    },
};


export const Dark: Story = {
    args: {
        children: <Text title={'Title'} text={'text'} />,
    },
    decorators: [themeDecorator(Themes.DARK)],
};
