import {DeepPartial} from '@reduxjs/toolkit';
import {ILoginSchema} from 'features/AuthByUsername';
import {loginActions, loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';

describe('testing userSlice functional', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = {username: '123'};
        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('321'))).toEqual({username: '321'});
    });

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = {password: '123'};
        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('321'))).toEqual({password: '321'});
    });
});
