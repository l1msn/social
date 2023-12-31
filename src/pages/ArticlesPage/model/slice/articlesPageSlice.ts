import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { IStateSchema } from '@/app/providers/StoreProvider';
import {
    ArticleSortField,
    ArticleType,
    ArticleView,
    IArticle,
} from '@/entities/Article';
import IArticlesPageSchema from '../types/IArticlesPageSchema';
import fetchArticlesList from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/consts/localStorage';
import SortOrder from '@/shared/types/sort';

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

const getArticles = articlesAdapter.getSelectors<IStateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.LIST,
        page: 1,
        hasMore: true,
        ids: [],
        entities: {},
        init: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const initView = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView;
            state.view = initView;
            state.limit = initView === ArticleView.LIST ? 4 : 9;
            state.init = true;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
export { getArticles };
