import {IStateSchema} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';
import getLoginPassword from './getLoginPassword';

describe('testing getLoginPassword functional', () => {
    test('return password', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as IStateSchema)).toEqual('123');
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginPassword(state as IStateSchema)).toEqual('');
    });
});
