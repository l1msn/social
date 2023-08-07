import type {Meta, StoryObj} from '@storybook/react';
import 'app/styles/index.scss';
import ThemeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';
import Text from './Text';
import ThemeText from '../consts/ThemeText';
import SizeText from '../consts/SizeText';


const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        text: 'text',
        title: 'title',
    },
};

export const LightError: Story = {
    args: {
        text: 'text',
        title: 'title',
        theme: ThemeText.ERROR,
    },
};

export const DarkS: Story = {
    args: {
        size: SizeText.S,
        text: 'text',
        title: 'title',
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};

export const DarkM: Story = {
    args: {
        size: SizeText.M,
        text: 'text',
        title: 'title',
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};

export const DarkL: Story = {
    args: {
        size: SizeText.L,
        text: 'text',
        title: 'title',
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};
