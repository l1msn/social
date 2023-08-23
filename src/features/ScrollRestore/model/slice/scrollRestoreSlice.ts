import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IScrollSchema from '../types/IScrollSchema';

const initialState: IScrollSchema = {
    scroll: {},
};

export const scrollRestoreSlice = createSlice({
    name: 'scrollRestoreSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { actions: scrollRestoreActions } = scrollRestoreSlice;
export const { reducer: scrollRestoreReducer } = scrollRestoreSlice;
