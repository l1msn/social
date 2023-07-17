import type {Meta, StoryObj} from '@storybook/react';
import 'app/styles/index.scss';
import Select from './Select';
import ThemeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';


const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        label: 'Select',
        options: [
            {value: '1', content: 'First'},
            {value: '2', content: 'Second'},
            {value: '3', content: 'Third'},
        ],
    },
};


export const Dark: Story = {
    args: {
        label: 'Select',
        options: [
            {value: '1', content: 'First'},
            {value: '2', content: 'Second'},
            {value: '3', content: 'Third'},
        ],
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};