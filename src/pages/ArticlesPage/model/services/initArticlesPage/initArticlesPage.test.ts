import TestAsyncThunk from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import initArticlesPage from './initArticlesPage';
import fetchArticlesList from '../fetchArticlesList/fetchArticlesList';
import { useSearchParams } from 'react-router-dom';

jest.mock('../fetchArticlesList/fetchArticlesList');

const searchParams = {
    sort: 'createdAt',
    order: 'asc',
    search: '',
    type: 'All',
};
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as object),
    useSearchParams: () => [searchParams],
}));

describe('testing initArticlesPage functional', () => {
    test('success init', async () => {
        const [searchParams] = useSearchParams();

        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                init: false,
                order: 'asc',
            },
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalledWith();
    });

    test('unsuccessful init', async () => {
        const [searchParams] = useSearchParams();
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                init: true,
            },
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
