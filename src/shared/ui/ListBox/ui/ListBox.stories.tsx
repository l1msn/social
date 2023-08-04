import type {Meta, StoryObj} from '@storybook/react';
import 'app/styles/index.scss';
import ListBox from './ListBox';
import ThemeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';


const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        defaultValue: 'default value in box',
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        onChange: (value: string) => {},
        items: [
            {value: '1', content: 'content 1'},
            {value: '2', content: 'content 2', disabled: true},
            {value: '3', content: 'content 3'},
        ],
    },
};


export const Dark: Story = {
    args: {
        defaultValue: 'default value in box',
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        onChange: (value: string) => {},
        items: [
            {value: '1', content: 'content 1'},
            {value: '2', content: 'content 2', disabled: true},
            {value: '3', content: 'content 3'},
        ],
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};
