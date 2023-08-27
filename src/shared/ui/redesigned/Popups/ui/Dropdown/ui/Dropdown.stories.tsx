import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Dropdown from './Dropdown';
import Button from '../../../../Button';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'shared/redesigned/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: '1',
            },
            {
                content: '2',
            },
            {
                content: '3',
                disabled: true,
            },
        ],
    },
};

export const Dark: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: '1',
            },
            {
                content: '2',
            },
            {
                content: '3',
                disabled: true,
            },
        ],
    },
};
