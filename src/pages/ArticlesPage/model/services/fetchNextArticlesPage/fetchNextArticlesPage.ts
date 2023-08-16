import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from '@/app/providers/StoreProvider';
import {articlesPageActions} from '../../slice/articlesPageSlice';
import fetchArticlesList from '../fetchArticlesList/fetchArticlesList';
import ArticlesPageSelectors from '../../selectors/ArticlesPageSelectors';


const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>('articlePage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        try {
            const hasMore = ArticlesPageSelectors.getArticlesPageHasMore(thunkAPI.getState());
            const page = ArticlesPageSelectors.getArticlesPageNumber(thunkAPI.getState());
            const isLoading = ArticlesPageSelectors.getArticlesPageIsLoading(thunkAPI.getState());

            if (hasMore && !isLoading) {
                thunkAPI.dispatch(articlesPageActions.setPage(page + 1));
                thunkAPI.dispatch(fetchArticlesList({replace: false}));
            }
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant get load next articles for page');
        }
    });

export default fetchNextArticlesPage;
