import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import i18nForTest from '../../../config/i18n/i18nForTest';
import {I18nextProvider} from 'react-i18next';
import {IStateSchema, StoreProvider} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';

interface IComponentRenderOptions {
    route?: string,
    initialState?: DeepPartial<IStateSchema>
}

function componentRender(component: React.ReactNode, options: IComponentRenderOptions = {}) {
    const {
        route = '/', initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}

export default componentRender;
