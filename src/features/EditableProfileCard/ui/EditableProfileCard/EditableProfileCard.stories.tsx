import { Meta, StoryObj } from '@storybook/react';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import EditableProfileCard from './EditableProfileCard';
import '@/app/styles/index.scss';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        id: '1',
    },
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {
        id: '1',
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};
