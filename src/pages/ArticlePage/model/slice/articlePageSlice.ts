import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IStateSchema} from 'app/providers/StoreProvider';
import {ArticleView, IArticle} from 'entities/Article/model';
import IArticlePageSchema from '../types/IArticlePageSchema';
import fetchArticlesList from '../services/fetchArticlesList/fetchArticlesList';
import {ARTICLE_VIEW_LOCALSTORAGE_KEY} from 'shared/consts/localStorage';

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

const getArticles = articlesAdapter.getSelectors<IStateSchema>(
    (state) =>
        state.articlesPage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<IArticlePageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.SHELF,
        page: 1,
        hasMore: true,
        ids: [],
        entities: {},
        init: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const initView = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = initView;
            state.limit = initView === ArticleView.LIST ? 4 : 9;
            state.init = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending,
                (state) => {
                    state.isLoading = true;
                    state.error = undefined;
                })
            .addCase(fetchArticlesList.fulfilled,
                (state, action: PayloadAction<IArticle[]>) => {
                    state.isLoading = false;
                    articlesAdapter.addMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                })
            .addCase(fetchArticlesList.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                });
    },
});

export const {reducer: articlePageReducer} = articlePageSlice;
export const {actions: articlePageActions} = articlePageSlice;
export {getArticles};
