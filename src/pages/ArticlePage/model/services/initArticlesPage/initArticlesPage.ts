import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from '@/app/providers/StoreProvider';
import {articlePageActions} from '../../slice/articlePageSlice';
import fetchArticlesList from '../../services/fetchArticlesList/fetchArticlesList';
import {ArticleSortField, ArticleType} from '@/entities/Article';
import SortOrder from '@/shared/types';
import ArticleSelectors from '../../selectors/ArticlePageSelectors';

const initArticlesPage = createAsyncThunk<void, URLSearchParams, IThunkConfig<string>>('articlePage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        try {
            const init = ArticleSelectors.getArticlePageInit(thunkAPI.getState());

            if (!init) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const typeFromUrl = searchParams.get('type') as ArticleType;
                const searchFromUrl = searchParams.get('search');

                if (orderFromUrl) {
                    thunkAPI.dispatch(articlePageActions.setOrder(orderFromUrl));
                }

                if (sortFromUrl) {
                    thunkAPI.dispatch(articlePageActions.setSort(sortFromUrl));
                }

                if (searchFromUrl) {
                    thunkAPI.dispatch(articlePageActions.setSearch(searchFromUrl));
                }

                if (typeFromUrl) {
                    thunkAPI.dispatch(articlePageActions.setType(typeFromUrl));
                }

                thunkAPI.dispatch(articlePageActions.initState());
                thunkAPI.dispatch(fetchArticlesList({replace: false}));
            }
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant init articles page');
        }
    });

export default initArticlesPage;
