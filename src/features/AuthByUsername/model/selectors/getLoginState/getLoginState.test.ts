import {IStateSchema} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';
import getLoginState from './getLoginState';

describe('testing getLoginPassword functional', () => {
    test('return full state', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'username',
                password: 'password',
                isLoading: false,
                error: '',
            },
        };
        expect(getLoginState(state as IStateSchema)).toEqual({
            username: 'username',
            password: 'password',
            isLoading: false,
            error: '',
        });
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginState(state as IStateSchema)).toEqual(undefined);
    });
});
