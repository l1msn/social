import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {IArticle} from 'entities/Article/model';
import getArticlePageLimit from 'pages/ArticlePage/model/selectors/getArticlePageLimit/getArticlePageLimit';

interface IFetchArticlesListProps {
    page?: number;
}


const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesListProps, IThunkConfig<string>>('articlePage/fetchArticlesList',
    async (props, thunkAPI) => {
        try {
            const {page = 1} = props;
            const limit = getArticlePageLimit(thunkAPI.getState());
            const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
