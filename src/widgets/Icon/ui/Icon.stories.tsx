import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import Icon from './Icon';
import themeDecorator from '../../../shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '../../../app/providers/ThemeProvider';
import UserIcon from '../../../shared/assets/icons/date-icon.svg';

const meta = {
    title: 'widget/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        Svg: UserIcon,
    },
};


export const Dark: Story = {
    args: {
        Svg: UserIcon,
    },
    decorators: [themeDecorator(Themes.DARK)],
};
