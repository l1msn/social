import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {articlePageActions} from '../../slice/articlePageSlice';
import fetchArticlesList from '../../services/fetchArticlesList/fetchArticlesList';
import getArticlePageInit from '../../selectors/getArticlePageInit/getArticlePageInit';

const initArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>('articlePage/initArticlesPage',
    async (_, thunkAPI) => {
        try {
            const init = getArticlePageInit(thunkAPI.getState());

            if (!init) {
                thunkAPI.dispatch(articlePageActions.initState());
                thunkAPI.dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant init articles page');
        }
    });

export default initArticlesPage;
