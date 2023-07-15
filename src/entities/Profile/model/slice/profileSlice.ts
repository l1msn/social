import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import fetchProfileData from '../services/fetchProfileData/fetchProfileData';
import {IProfile, IProfileSchema} from '../types/IProfile';
import updateProfileData from '../../model/services/updateProfileData/updateProfileData';


const initialState: IProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending,
                (state) => {
                    state.error = undefined;
                    state.isLoading = true;
                })
            .addCase(fetchProfileData.fulfilled,
                (state, action: PayloadAction<IProfile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                })
            .addCase(fetchProfileData.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                })
            .addCase(updateProfileData.pending,
                (state) => {
                    state.error = undefined;
                    state.isLoading = true;
                })
            .addCase(updateProfileData.fulfilled,
                (state, action: PayloadAction<IProfile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                    state.readonly = true;
                })
            .addCase(updateProfileData.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                },
            );
    },
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;

