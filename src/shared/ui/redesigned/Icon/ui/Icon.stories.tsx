import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Icon from './Icon';
import Theme from '@/shared/assets/icons/redesigned/theme.svg';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/redesigned/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        Svg: Theme,
    },
};
