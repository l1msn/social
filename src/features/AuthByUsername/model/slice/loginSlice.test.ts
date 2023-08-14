import {IUser} from '@/entities/User';
import ILoginSchema from '../types/ILoginSchema';
import {loginReducer} from './loginSlice';
import loginByUsername from '../../services/loginByUsername/loginByUsername';

const mockData: IUser = {
    username: 'username',
    avatar: undefined,
    id: 1,
};

describe('testing articleDetailsCommentsSlice functional', () => {
    test('test fetch comments by article id pending', () => {
        const state: DeepPartial<ILoginSchema> = {
            isLoading: false,
            username: '',
            password: '',
            error: undefined,
        };
        expect(loginReducer(state as ILoginSchema, loginByUsername.pending)).
            toEqual({
                isLoading: true,
                username: '',
                password: '',
                error: undefined,
            });
    });

    test('test login by username fulfilled', () => {
        const state: Omit<ILoginSchema, 'isLoading' | 'error'> = {
            username: '',
            password: '',
        };
        expect(loginReducer(state as ILoginSchema, loginByUsername.fulfilled(mockData, '', state))).
            toEqual({
                isLoading: false,
                username: '',
                password: '',
            });
    });
});
