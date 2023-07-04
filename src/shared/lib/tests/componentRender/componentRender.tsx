import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import i18nForTest from '../../../config/i18n/i18nForTest';
import {I18nextProvider} from 'react-i18next';

interface IComponentRenderOptions {
    route?: string
}

function componentRender(component: React.ReactNode, options: IComponentRenderOptions = {}) {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}

export default componentRender;
