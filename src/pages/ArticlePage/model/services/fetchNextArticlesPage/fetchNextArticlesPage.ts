import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import getArticlePageHasMore from '../../selectors/getArticlePageHasMore/getArticlePageHasMore';
import getArticlePageNumber from '../../selectors/getArticlePageNumber/getArticlePageNumber';
import {articlePageActions} from '../../slice/articlePageSlice';
import fetchArticlesList from '../fetchArticlesList/fetchArticlesList';
import getArticlePageIsLoading from '../../selectors/getArticlePageIsLoading/getArticlePageIsLoading';

const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>('articlePage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        try {
            const hasMore = getArticlePageHasMore(thunkAPI.getState());
            const page = getArticlePageNumber(thunkAPI.getState());
            const isLoading = getArticlePageIsLoading(thunkAPI.getState());

            if (hasMore && !isLoading) {
                thunkAPI.dispatch(articlePageActions.setPage(page + 1));
                thunkAPI.dispatch(fetchArticlesList({replace: false}));
            }
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant get load next articles for page');
        }
    });

export default fetchNextArticlesPage;
