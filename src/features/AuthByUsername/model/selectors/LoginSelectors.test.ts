import {IStateSchema} from '@/app/providers/StoreProvider';
import LoginSelectors from './LoginSelectors';

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
        expect(LoginSelectors.getLoginState(state as IStateSchema)).toEqual({
            username: 'username',
            password: 'password',
            isLoading: false,
            error: '',
        });
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(LoginSelectors.getLoginState(state as IStateSchema)).toEqual(undefined);
    });
});

describe('testing getLoginError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'ERROR',
            },
        };
        expect(LoginSelectors.getLoginError(state as IStateSchema)).toEqual('ERROR');
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(LoginSelectors.getLoginError(state as IStateSchema)).toEqual('');
    });
});

describe('testing getLoginIsLoading functional', () => {
    test('return isLoading', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(LoginSelectors.getLoginIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(LoginSelectors.getLoginIsLoading(state as IStateSchema)).toEqual(false);
    });
});

describe('testing getLoginPassword functional', () => {
    test('return password', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(LoginSelectors.getLoginPassword(state as IStateSchema)).toEqual('123');
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(LoginSelectors.getLoginPassword(state as IStateSchema)).toEqual('');
    });
});

describe('testing getLoginUsername functional', () => {
    test('return username', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'asd',
            },
        };
        expect(LoginSelectors.getLoginUsername(state as IStateSchema)).toEqual('asd');
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(LoginSelectors.getLoginUsername(state as IStateSchema)).toEqual('');
    });
});
