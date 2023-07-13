import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import i18nForTest from '../../../config/i18n/i18nForTest';
import {I18nextProvider} from 'react-i18next';
import {IStateSchema, StoreProvider} from 'app/providers/StoreProvider';

interface IComponentRenderOptions {
    route?: string,
    initialState?: DeepPartial<IStateSchema>
}

function componentRender(component: React.ReactNode, options: IComponentRenderOptions = {}) {
    const {
        route = '/', initialState,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}

export default componentRender;
