import axios from 'axios';
import TestAsyncThunk from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import {IComment} from 'entities/Comment';
import fetchCommentsByArticleId
    from 'pages/ArticleDetailsPage/services/fetchCommentsByArticleId/fetchCommentsByArticleId';


jest.mock('axios');

const mockedAxios = jest.mocked(axios, {
    shallow: false,
});


const mockData: IComment[] = [
    {
        'id': '1',
        'text': 'very good',
        'user': {
            username: 'username',
            avatar: 'none',
            id: '2',
        },
    },
    {
        'id': '2',
        'text': 'not bad',
        'user': {
            username: 'admin',
            avatar: 'none',
            id: '1',
        },
    },
];

describe('testing fetchCommentsByArticleId functional', () => {
    test('success fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({data: mockData}));

        const result = await thunk.callThunk(1);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockData);
    });

    test('403 error login', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
