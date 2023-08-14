import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from '@/app/providers/StoreProvider';
import {ArticleType, IArticle} from '@/entities/Article';
import {addQueryParams} from '@/shared/lib/url/addQueryParams/addQueryParams';
import ArticlePageSelectors from '../../selectors/ArticlePageSelectors';

interface IFetchArticlesList {
    replace?: boolean;
}


const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesList, IThunkConfig<string>>('articlePage/fetchArticlesList',
    async (_, thunkAPI) => {
        try {
            const page = ArticlePageSelectors.getArticlePageNumber(thunkAPI.getState());
            const order = ArticlePageSelectors.getArticlePageOrder(thunkAPI.getState());
            const sort = ArticlePageSelectors.getArticlePageSort(thunkAPI.getState());
            const search = ArticlePageSelectors.getArticlePageSearch(thunkAPI.getState());
            const type = ArticlePageSelectors.getArticlePageType(thunkAPI.getState());

            addQueryParams({
                sort, order, search, type,
            });

            const limit = ArticlePageSelectors.getArticlePageLimit(thunkAPI.getState());
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
