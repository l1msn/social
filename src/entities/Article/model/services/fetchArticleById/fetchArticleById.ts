import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {IArticle} from '../../types/IArticle';


const fetchArticleById = createAsyncThunk<IArticle, number | string, IThunkConfig<string>>('article/fetchArticleById',
    async (articleId: number | string, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IArticle>('/articles/' + articleId.toString());

            if (!response.data) {
                throw new Error('No data!');
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant get a article by id!');
        }
    });

export default fetchArticleById;
