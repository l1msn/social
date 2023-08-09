import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import i18nForTest from '../../../config/i18n/i18nForTest';
import {I18nextProvider} from 'react-i18next';
import {IStateSchema, StoreProvider} from '@/app/providers/StoreProvider';
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface IComponentRenderOptions {
    route?: string,
    initialState?: DeepPartial<IStateSchema>,
    asyncReducers?: ReducersList;
}

function componentRender(component: React.ReactNode, options: IComponentRenderOptions = {}) {
    const {
        route = '/', initialState, asyncReducers,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}

export default componentRender;
