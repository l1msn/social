import type { Preview } from '@storybook/react';
import styleDecorator from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import themeDecorator from '../../src/shared/config/storybook/themeDecorator/themeDecorator';
import routerDecorator from '../../src/shared/config/storybook/routerDecorator/routerDecorator';
import suspenseDecorator from '../../src/shared/config/storybook/suspenseDecorator/suspenseDecorator';
import Themes from '../../src/shared/consts/theme';
import featureFlagsDecorator from '../../src/shared/config/storybook/featureFlagsDecorator/featureFlagsDecorator';

// @ts-ignore
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Themes.LIGHT, color: '#ffffff' },
                { name: 'dark', class: Themes.DARK, color: '#000000' },
            ],
        },
    },
    decorators: [
        // @ts-ignore
        styleDecorator,
        themeDecorator(Themes.DARK),
        routerDecorator,
        suspenseDecorator,
        featureFlagsDecorator({ isAppRedesigned: false }),
    ],
};

export default preview;
