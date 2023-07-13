import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import fetchProfileData from '../services/fetchProfileData/fetchProfileData';
import {IProfile, IProfileSchema} from '../types/IProfile';


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
        setProfileData: (state, action: PayloadAction<IProfile>) => {
            state.data = action.payload;
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
                    state.isLoading = true;
                    state.data = action.payload;
                })
            .addCase(fetchProfileData.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                },
            );
    },
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;

