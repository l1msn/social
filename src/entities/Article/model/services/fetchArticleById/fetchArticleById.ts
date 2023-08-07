import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {IArticle} from '../../types/IArticle';


const fetchArticleById = createAsyncThunk<IArticle, number | string | undefined, IThunkConfig<string>>('article/fetchArticleById',
    async (articleId: number | string | undefined, thunkAPI) => {
        try {
            if (!articleId) {
                return thunkAPI.rejectWithValue('No id!');
            }

            const response = await thunkAPI.extra.api.get<IArticle>('/articles/' + articleId.toString(), {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                return thunkAPI.rejectWithValue('No data!');
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant get a article by id!');
        }
    });

export default fetchArticleById;
