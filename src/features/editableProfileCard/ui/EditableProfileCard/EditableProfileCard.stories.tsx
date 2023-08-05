import {Meta, StoryObj} from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';
import EditableProfileCard from './EditableProfileCard';

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {
        id: '1',
    },
    decorators: [themeDecorator(Themes.DARK), StoreDecorator({})],
};
