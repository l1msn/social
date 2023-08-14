import {Meta, StoryObj} from '@storybook/react';
import storeDecorator from 'shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';
import ArticleSortSelector from './ArticleSortSelector';

const meta = {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};
