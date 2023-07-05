import type {Preview} from '@storybook/react';
import styleDecorator from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import themeDecorator from '../../src/shared/config/storybook/themeDecorator/themeDecorator';
import {Themes} from '../../src/app/providers/ThemeProvider';
import routerDecorator from '../../src/shared/config/storybook/routerDecorator/routerDecorator';

// @ts-ignore
const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        // @ts-ignore
        styleDecorator, themeDecorator(Themes.LIGHT), routerDecorator,
    ],
};


export default preview;
