import type {Meta, StoryObj} from '@storybook/react';

import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import ProfileCard from './ProfileCard';
import Themes from '@/shared/consts/theme';


const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        data: {
            'first': 'Alex',
            'lastname': 'Sadykov',
            'age': 23,
            'city': 'Saint-Petersburg',
            'username': 'Darlingg',
            'avatar': 'https://i.imgur.com/IyES7O4.png',
        },
    },
};


export const Dark: Story = {
    args: {
        data: {
            'first': 'Alex',
            'lastname': 'Sadykov',
            'age': 23,
            'city': 'Saint-Petersburg',
            'username': 'Darlingg',
            'avatar': 'https://i.imgur.com/IyES7O4.png',
        },
    },
    decorators: [themeDecorator(Themes.DARK)],
};
