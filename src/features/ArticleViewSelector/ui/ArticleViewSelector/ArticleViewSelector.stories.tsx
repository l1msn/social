import {Meta, StoryObj} from '@storybook/react';
import ArticleViewSelector from './ArticleViewSelector';
import {ArticleView} from '@/entities/Article';
import storeDecorator from '@/shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        view: ArticleView.SHELF,
    },
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {
        view: ArticleView.SHELF,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};

export const DarkList: Story = {
    args: {
        view: ArticleView.LIST,
    },
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};
