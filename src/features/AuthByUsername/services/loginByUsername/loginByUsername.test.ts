import axios from 'axios';
import loginByUsername from './loginByUsername';
import { userActions } from '@/entities/User';
import TestAsyncThunk from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, {
    shallow: false,
});

describe('testing loginByUsername functional', () => {
    test('success login with TestAsyncThunk', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(
            Promise.resolve({ data: { username: '123', id: 1 } }),
        );

        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData({
                username: '123',
                id: 1,
            }),
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ username: '123', id: 1 });
    });

    test('403 error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Invalid username or password');
    });
});
