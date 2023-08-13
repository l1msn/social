import type {Meta, StoryObj} from '@storybook/react';
import '@/app/styles/index.scss';
import Code from './Code';
import themeDecorator from '../../../config/storybook/themeDecorator/themeDecorator';

import Themes from '@/shared/consts/theme';

const meta = {
    title: 'widget/Code',
    component: Code,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        codeText: 'export const Dark: Story = {\n' +
            '    args: {\n' +
            '        children: \'console.log(123)\',\n' +
            '    },\n' +
            '    decorators: [themeDecorator(Themes.DARK)],\n' +
            '};',
    },
};


export const Dark: Story = {
    args: {
        codeText: 'export const Dark: Story = {\n' +
            '    args: {\n' +
            '        children: \'console.log(123)\',\n' +
            '    },\n' +
            '    decorators: [themeDecorator(Themes.DARK)],\n' +
            '};',
    },
    decorators: [themeDecorator(Themes.DARK)],
};
