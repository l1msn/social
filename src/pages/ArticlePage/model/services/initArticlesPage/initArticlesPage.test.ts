// import TestAsyncThunk from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
// import initArticlesPage from './initArticlesPage';
// import fetchArticlesList from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
// import {useSearchParams} from 'react-router-dom';
//
// jest.mock('../fetchArticlesList/fetchArticlesList');
//
// describe('testing initArticlesPage functional', () => {
//     test('success init', async () => {
//         const [searchParams] = useSearchParams();
//
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//                 init: false,
//                 order: 'asc',
//             },
//         });
//
//         await thunk.callThunk(searchParams);
//
//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticlesList).toHaveBeenCalledWith({page: 1});
//     });
//
//     test('unsuccessful init', async () => {
//         const [searchParams] = useSearchParams();
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//                 init: true,
//             },
//         });
//
//         await thunk.callThunk(searchParams);
//
//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(fetchArticlesList).not.toHaveBeenCalled();
//     });
// });
