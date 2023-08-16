import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from '@/app/providers/StoreProvider';
import {ArticleType, IArticle} from '@/entities/Article';
import {addQueryParams} from '@/shared/lib/url/addQueryParams/addQueryParams';
import ArticlesPageSelectors from '../../selectors/ArticlesPageSelectors';

interface IFetchArticlesList {
    replace?: boolean;
}


const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesList, IThunkConfig<string>>('articlePage/fetchArticlesList',
    async (_, thunkAPI) => {
        try {
            const page = ArticlesPageSelectors.getArticlesPageNumber(thunkAPI.getState());
            const order = ArticlesPageSelectors.getArticlesPageOrder(thunkAPI.getState());
            const sort = ArticlesPageSelectors.getArticlesPageSort(thunkAPI.getState());
            const search = ArticlesPageSelectors.getArticlesPageSearch(thunkAPI.getState());
            const type = ArticlesPageSelectors.getArticlesPageType(thunkAPI.getState());

            addQueryParams({
                sort, order, search, type,
            });

            const limit = ArticlesPageSelectors.getArticlesPageLimit(thunkAPI.getState());
            const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                return thunkAPI.rejectWithValue('Cant get a article data!');
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant get a article list!');
        }
    });

export default fetchArticlesList;
