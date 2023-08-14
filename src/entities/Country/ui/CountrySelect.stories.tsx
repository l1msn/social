import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import CountrySelect from './CountrySelect';
import Themes from '@/shared/consts/theme';


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
    decorators: [themeDecorator(Themes.DARK)],
};
