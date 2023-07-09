import type {Meta, StoryObj} from '@storybook/react';
import 'app/styles/index.scss';
import ThemeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';
import Text from './Text';
import ThemeText from '../consts/ThemeText';


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

export const Dark: Story = {
    args: {
        text: 'text',
        title: 'title',
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};
