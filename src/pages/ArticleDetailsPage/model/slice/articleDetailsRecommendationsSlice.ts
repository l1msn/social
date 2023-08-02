import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import {IStateSchema} from 'app/providers/StoreProvider';
import IArticleDetailsRecommendationsSchema
    from '../types/IArticleDetailsRecommendationsSchema';
import {IArticle} from 'entities/Article';
import fetchArticleRecommendations from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

const getArticleRecommendations = recommendationsAdapter.getSelectors<IStateSchema>(
    (state) =>
        state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending,
                (state) => {
                    state.isLoading = true;
                    state.error = undefined;
                })
            .addCase(fetchArticleRecommendations.fulfilled,
                (state, action: PayloadAction<IArticle[]>) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                })
            .addCase(fetchArticleRecommendations.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                });
    },
});

export const {reducer: articleDetailsRecommendationsReducer} = articleDetailsRecommendationsSlice;
export {getArticleRecommendations};
