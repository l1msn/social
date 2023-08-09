import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import Dropdown from './Dropdown';
import ThemeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '@/app/providers/ThemeProvider';
import Button from '@/shared/ui/Button';


const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: '1',
            },
            {
                content: '2',
            },
            {
                content: '3',
                disabled: true,
            },
        ],
    },
};


export const Dark: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: '1',
            },
            {
                content: '2',
            },
            {
                content: '3',
                disabled: true,
            },
        ],
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};
