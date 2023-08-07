module.exports = (layer, componentName) => `import {Meta, StoryObj} from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/storeDecorator/storeDecorator';
import themeDecorator from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from 'app/providers/ThemeProvider';
import ${componentName} from './${componentName}';

const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {
    },
    decorators: [themeDecorator(Themes.DARK), StoreDecorator({})],
};`;
