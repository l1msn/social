import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserScheme } from '../types/IUser';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localStorage';
import { setFeatureFlags } from '@/shared/features';
import saveJsonSettings from '../services/saveJsonSettings';
import IJsonSettings from '../types/IJsonSettings';
import initAuthData from '../services/initAuthData';

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

            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                action.payload.id.toString(),
            );
        },
        logout: (state) => {
            state.authData = undefined;
            setFeatureFlags({});
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, action: PayloadAction<IJsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            },
        );
        builder.addCase(
            initAuthData.fulfilled,
            (state, action: PayloadAction<IUser>) => {
                state.authData = action.payload;
                setFeatureFlags(action.payload.features);
                state.init = true;
            },
        );
        builder.addCase(initAuthData.rejected, (state) => {
            state.init = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
