import { render } from '@testing-library/react';
import React from 'react';
import IComponentRenderOptions from './types/IComponentRenderOptions';
import TestProvider from '../testProvider/testProvider';

function componentRender(
    component: React.ReactNode,
    options: IComponentRenderOptions = {},
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}

export default componentRender;
