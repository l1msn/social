import 'app/styles/index.scss';
import {Story} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';

const routerDecorator = (story: () => Story<any>) => {
    return (
        <BrowserRouter>
            {// @ts-ignore
                story()
            }
        </BrowserRouter>
    );
};

export default routerDecorator;
