import {createSlice} from '@reduxjs/toolkit';
import {IUserScheme} from '../types/user';


const initialState: IUserScheme = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
});

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;

