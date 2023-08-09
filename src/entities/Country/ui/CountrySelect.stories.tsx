import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import ThemeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '@/app/providers/ThemeProvider';
import CountrySelect from './CountrySelect';


const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {

    },
};


export const Dark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Themes.DARK)],
};
