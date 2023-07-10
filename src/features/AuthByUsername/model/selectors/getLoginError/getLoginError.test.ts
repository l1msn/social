import {IStateSchema} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';
import getLoginError from './getLoginError';

describe('testing getLoginError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'ERROR',
            },
        };
        expect(getLoginError(state as IStateSchema)).toEqual('ERROR');
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginError(state as IStateSchema)).toEqual('');
    });
});
