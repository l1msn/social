import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';
import fetchCommentsByArticleId from '../fetchCommentsByArticleId/fetchCommentsByArticleId';
import { UserSelectors } from '@/entities/User';
import { ArticleSelectors } from '@/entities/Article';

const addCommentForArticle = createAsyncThunk<
    IComment,
    string,
    IThunkConfig<string>
>('articleDetailsPage/addCommentForArticle', async (text, thunkAPI) => {
    try {
        const userData = UserSelectors.getUserAuthData(thunkAPI.getState());
        const article = ArticleSelectors.getArticleData(thunkAPI.getState());

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
