import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserScheme } from '../types/IUser';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localStorage';
import { setFeatureFlags } from '@/shared/features';

const initialState: IUserScheme = {
    init: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                const userJSON = JSON.parse(user) as IUser;
                state.authData = userJSON;
                setFeatureFlags(userJSON.features);
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
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
