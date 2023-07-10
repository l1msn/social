import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser, IUserScheme} from '../types/user';
import USER_LOCALSTORAGE_KEY from 'shared/consts/localStorage';


const initialState: IUserScheme = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state: IUserScheme = initialState, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state: IUserScheme) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state: IUserScheme) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;

