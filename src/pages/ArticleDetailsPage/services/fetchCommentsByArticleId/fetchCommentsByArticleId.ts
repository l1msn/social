import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {IComment} from 'entities/Comment';


const fetchCommentsByArticleId = createAsyncThunk<IComment[], number | string | undefined, IThunkConfig<string>>('articleDetails/fetchCommentsByArticleId',
    async (articleId: number | string | undefined, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IComment[]>('/comments/', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!articleId) {
                return thunkAPI.rejectWithValue('Cant get a article id!');
            }

            if (!response.data) {
                return thunkAPI.rejectWithValue('Cant get a article data!');
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant get a article!');
        }
    });

export default fetchCommentsByArticleId;
