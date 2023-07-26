import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {IComment} from 'entities/Comment';
import {getUserAuthData} from 'entities/User';
import {getArticleData} from 'entities/Article/model';
import fetchCommentsByArticleId
    from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';


const addCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string>>('articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        try {
            const userData = getUserAuthData(thunkAPI.getState());
            const article = getArticleData(thunkAPI.getState());

            if (!userData || !text || !article) {
                return thunkAPI.rejectWithValue('No data!');
            }

            const response = await thunkAPI.extra.api.post<IComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text: text,
            });

            if (!response.data) {
                throw new Error('No data!');
            }

            thunkAPI.dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant get a article!');
        }
    });

export default addCommentForArticle;
