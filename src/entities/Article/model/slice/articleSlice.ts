import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IArticleSchema from '../types/IArticleSchema';
import fetchArticleById from '../services/fetchArticleById/fetchArticleById';
import { IArticle } from '../types/IArticle';

const initialState: IArticleSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<IArticle>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
