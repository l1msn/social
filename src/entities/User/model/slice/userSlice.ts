import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser, IUserScheme} from 'entities/User';
import USER_LOCALSTORAGE_KEY from 'shared/consts/localStorage';


const initialState: IUserScheme = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state: IUserScheme) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state: IUserScheme) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;

