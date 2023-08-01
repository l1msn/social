import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {IComment} from 'entities/Comment';
import {getUserAuthData} from 'entities/User';
import {getArticleData} from 'entities/Article';
import fetchCommentsByArticleId
    from '../fetchCommentsByArticleId/fetchCommentsByArticleId';


const addCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string>>('articleDetailsPage/addCommentForArticle',
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

            thunkAPI.dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant add a comment for article!');
        }
    });

export default addCommentForArticle;
