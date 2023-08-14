import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import Flex from './Flex';
import Themes from '@/shared/consts/theme';


const meta = {
    title: 'widget/Flex',
    component: Flex,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;


export const LightRow: Story = {
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
    decorators: [themeDecorator(Themes.DARK)],
};

export const LightColumn: Story = {
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
    decorators: [themeDecorator(Themes.DARK)],
};

export const LightGap: Story = {
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
    decorators: [themeDecorator(Themes.DARK)],
};

export const LightEnd: Story = {
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
    decorators: [themeDecorator(Themes.DARK)],
};

export const LightCenter: Story = {
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
    decorators: [themeDecorator(Themes.DARK)],
};

