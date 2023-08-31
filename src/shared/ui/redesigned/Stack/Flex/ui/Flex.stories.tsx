import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Flex from './Flex';
import Themes from '@/shared/consts/theme';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';

const meta = {
    title: 'shared/redesigned/Flex',
    component: Flex,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeRedesignedDecorator(Themes.DARK)],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkRow: Story = {
    args: {
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        ),
    },
};

export const DarkColumn: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        ),
    },
};

export const DarkGap: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        ),
    },
};

export const DarkEnd: Story = {
    args: {
        justify: 'end',
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        ),
    },
};

export const DarkCenter: Story = {
    args: {
        align: 'center',
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        ),
    },
};
