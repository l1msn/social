import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from '@/app/providers/StoreProvider';
import {articlePageActions} from '../../slice/articlePageSlice';
import fetchArticlesList from '../fetchArticlesList/fetchArticlesList';
import ArticlePageSelectors from '../../selectors/ArticlePageSelectors';


const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>('articlePage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        try {
            const hasMore = ArticlePageSelectors.getArticlePageHasMore(thunkAPI.getState());
            const page = ArticlePageSelectors.getArticlePageNumber(thunkAPI.getState());
            const isLoading = ArticlePageSelectors.getArticlePageIsLoading(thunkAPI.getState());

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
