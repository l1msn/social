import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProfile, IProfileSchema} from 'entities/Profile';


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
        setProfileData: (state: IProfileSchema = initialState, action: PayloadAction<IProfile>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;

