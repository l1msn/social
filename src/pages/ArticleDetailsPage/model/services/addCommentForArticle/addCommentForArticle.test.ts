import axios from 'axios';
import TestAsyncThunk from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { IComment } from '@/entities/Comment';
import addCommentForArticle from './addCommentForArticle';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, {
    shallow: false,
});

const mockDataOldComments: IComment[] = [
    {
        id: '1',
        text: 'very good',
        user: {
            username: 'username',
            avatar: 'none',
            id: '2',
        },
    },
    {
        id: '2',
        text: 'not bad',
        user: {
            username: 'admin',
            avatar: 'none',
            id: '1',
        },
    },
];

const mockDataNewComment: IComment = {
    id: '3',
    text: 'very good 2',
    user: {
        username: 'username',
        avatar: 'none',
        id: '2',
    },
};

describe('testing addCommentForArticle functional', () => {
    // test('success added comment', async () => {
    //     const thunk = new TestAsyncThunk(addCommentForArticle);
    //     thunk.api.post.mockReturnValue(Promise.resolve({data: mockDataOldComments}));
    //
    //     const result = await thunk.callThunk('text');
    //
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual([...mockDataOldComments, mockDataNewComment]);
    // });

    test('403 error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('3');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
