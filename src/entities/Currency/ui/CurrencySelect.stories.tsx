import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '@/app/providers/ThemeProvider';
import CurrencySelect from './CurrencySelect';


const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {

    },
};


export const Dark: Story = {
    args: {

    },
    decorators: [themeDecorator(Themes.DARK)],
};
