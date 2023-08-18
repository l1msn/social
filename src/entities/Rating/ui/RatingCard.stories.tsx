import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';
import RatingCard from './RatingCard';
import Themes from '@/shared/consts/theme';

const meta = {
    title: 'entities/RatingCard',
    component: RatingCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        title: 'Rate',
        feedbackTitle: 'feedback',
        hasFeedback: false,
    },
};

export const Dark: Story = {
    args: {
        title: 'Rate',
        feedbackTitle: 'feedback',
        hasFeedback: false,
    },
    decorators: [themeDecorator(Themes.DARK)],
};

export const DarkWithModal: Story = {
    args: {
        title: 'Rate',
        feedbackTitle: 'feedback',
        hasFeedback: true,
    },
    decorators: [themeDecorator(Themes.DARK)],
};
