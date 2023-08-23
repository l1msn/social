import React from 'react';
import Themes from '@/shared/consts/theme';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import IComponentRenderOptions from '../componentRender/types/IComponentRenderOptions';
import '@/app/styles/index.scss';

interface TestProviderProps {
    children: React.ReactNode;
    options?: IComponentRenderOptions;
}
function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Themes.LIGHT,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <I18nextProvider i18n={i18nForTest}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export default TestProvider;
