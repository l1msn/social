import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from '@/app/providers/StoreProvider';
import {ArticleType, IArticle} from '@/entities/Article';
import getArticlePageLimit from '../../selectors/getArticlePageLimit/getArticlePageLimit';
import getArticlePageOrder from '../../selectors/getArticlePageOrder/getArticlePageOrder';
import getArticlePageSort from '../../selectors/getArticlePageSort/getArticlePageSort';
import getArticlePageSearch from '../../selectors/getArticlePageSearch/getArticlePageSearch';
import getArticlePageNumber from '../../selectors/getArticlePageNumber/getArticlePageNumber';
import {addQueryParams} from '@/shared/lib/url/addQueryParams/addQueryParams';
import getArticlePageType from '../../selectors/getArticlePageType/getArticlePageType';

interface IFetchArticlesList {
    replace?: boolean;
}


const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesList, IThunkConfig<string>>('articlePage/fetchArticlesList',
    async (_, thunkAPI) => {
        try {
            const page = getArticlePageNumber(thunkAPI.getState());
            const order = getArticlePageOrder(thunkAPI.getState());
            const sort = getArticlePageSort(thunkAPI.getState());
            const search = getArticlePageSearch(thunkAPI.getState());
            const type = getArticlePageType(thunkAPI.getState());

            addQueryParams({
                sort, order, search, type,
            });

            const limit = getArticlePageLimit(thunkAPI.getState());
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
