import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import Card from './Card';
import ThemeDecorator from '../../../shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '../../../app/providers/ThemeProvider';
import {Text} from '@/shared/ui/Text';

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
    decorators: [ThemeDecorator(Themes.DARK)],
};
