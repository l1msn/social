import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Icon from './Icon';
import Theme from '@/shared/assets/icons/redesigned/theme.svg';
import themeRedesignDecorator from '@/shared/config/storybook/themeRedesignDecorator/themeRedesignDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/IconRedesigned',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignDecorator(Themes.DARK)],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        Svg: Theme,
    },
};
