import type {Preview} from '@storybook/react';
import styleDecorator from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import themeDecorator from '../../src/shared/config/storybook/themeDecorator/themeDecorator';
import routerDecorator from '../../src/shared/config/storybook/routerDecorator/routerDecorator';
import suspenseDecorator from '../../src/shared/config/storybook/suspenseDecorator/suspenseDecorator';
import Themes from "../../src/shared/consts/theme";

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
        styleDecorator, themeDecorator(Themes.LIGHT), routerDecorator, suspenseDecorator,
    ],
};


export default preview;
