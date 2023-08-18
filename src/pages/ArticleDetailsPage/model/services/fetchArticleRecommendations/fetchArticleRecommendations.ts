import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IArticle } from '@/entities/Article';

const fetchArticleRecommendations = createAsyncThunk<
    IArticle[],
    void,
    IThunkConfig<string>
>('articleDetailsPage/fetchArticleRecommendations', async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: 4,
            },
        });

        if (!response.data) {
            return thunkAPI.rejectWithValue('Cant get a recommendations data!');
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Cant get a recommendations list!');
    }
});

export default fetchArticleRecommendations;
