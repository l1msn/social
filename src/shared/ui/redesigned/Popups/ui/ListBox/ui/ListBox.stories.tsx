import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import ListBox from './ListBox';
import Themes from '@/shared/consts/theme';
import themeRedesignedDecorator from '@/shared/config/storybook/themeRedesignedDecorator/themeRedesignedDecorator';

const meta = {
    title: 'shared/redesigned/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
        themeRedesignedDecorator(Themes.DARK),
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        defaultValue: 'default value in box',
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        onChange: (value: string) => {},
        items: [
            { value: '1', content: 'content 1' },
            { value: '2', content: 'content 2', disabled: true },
            { value: '3', content: 'content 3' },
        ],
    },
};

export const DarkTopLeft: Story = {
    args: {
        direction: 'top left',
        defaultValue: 'default value in box',
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        onChange: (value: string) => {},
        items: [
            { value: '1', content: 'content 1' },
            { value: '2', content: 'content 2', disabled: true },
            { value: '3', content: 'content 3' },
        ],
    },
};

export const DarkTopRight: Story = {
    args: {
        direction: 'top right',
        defaultValue: 'default value in box',
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        onChange: (value: string) => {},
        items: [
            { value: '1', content: 'content 1' },
            { value: '2', content: 'content 2', disabled: true },
            { value: '3', content: 'content 3' },
        ],
    },
};

export const DarkBottomLeft: Story = {
    args: {
        direction: 'bottom left',
        defaultValue: 'default value in box',
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        onChange: (value: string) => {},
        items: [
            { value: '1', content: 'content 1' },
            { value: '2', content: 'content 2', disabled: true },
            { value: '3', content: 'content 3' },
        ],
    },
};

export const DarkBottomRight: Story = {
    args: {
        direction: 'bottom right',
        defaultValue: 'default value in box',
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        onChange: (value: string) => {},
        items: [
            { value: '1', content: 'content 1' },
            { value: '2', content: 'content 2', disabled: true },
            { value: '3', content: 'content 3' },
        ],
    },
};
