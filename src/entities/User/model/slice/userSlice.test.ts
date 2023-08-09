import {userActions, userReducer} from './userSlice';
import {IUser, IUserScheme} from '@/entities/User';

const mockUser: IUser = {
    id: 1,
    username: 'admin',
};

describe('testing userSlice functional', () => {
    test('test set auth data', () => {
        const state: DeepPartial<IUserScheme> = {authData: {id: 1, username: 'not admin'}};
        expect(userReducer(state as IUserScheme, userActions.setAuthData(mockUser))).toEqual({
            authData: {
                id: 1,
                username: mockUser.username,
            }});
    });

    test('test logout', () => {
        const state: DeepPartial<IUserScheme> = {authData: {id: 1, username: 'not admin'}};
        expect(userReducer(state as IUserScheme, userActions.logout())).toEqual({
            authData: undefined,
        });
    });
});
