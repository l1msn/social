import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import fetchArticlesList from '../../services/fetchArticlesList/fetchArticlesList';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import SortOrder from '@/shared/types/sort';
import ArticleSelectors from '../../selectors/ArticlesPageSelectors';

const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    IThunkConfig<string>
>('articlePage/initArticlesPage', async (searchParams, thunkAPI) => {
    try {
        const init = ArticleSelectors.getArticlesPageInit(thunkAPI.getState());

        if (!init) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const typeFromUrl = searchParams.get('type') as ArticleType;
            const searchFromUrl = searchParams.get('search');

            if (orderFromUrl) {
                thunkAPI.dispatch(articlesPageActions.setOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                thunkAPI.dispatch(articlesPageActions.setSort(sortFromUrl));
            }

            if (searchFromUrl) {
                thunkAPI.dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            if (typeFromUrl) {
                thunkAPI.dispatch(articlesPageActions.setType(typeFromUrl));
            }

            thunkAPI.dispatch(articlesPageActions.initState());
            thunkAPI.dispatch(fetchArticlesList({ replace: false }));
        }
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue('Cant init articles page');
    }
});

export default initArticlesPage;
