import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser, IUserScheme} from '../types/IUser';
import {USER_LOCALSTORAGE_KEY} from '@/shared/consts/localStorage';


const initialState: IUserScheme = {
    init: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                console.log(user);
                state.authData = JSON.parse(user);
            }
            state.init = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

// Action creators are generated for each case reducer function
export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;

