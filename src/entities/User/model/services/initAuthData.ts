import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { IUser } from '../types/IUser';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localStorage';

const initAuthData = createAsyncThunk<IUser, void, IThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        try {
            const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (!userId) {
                return thunkAPI.rejectWithValue('No user id in localstorage');
            }

            const response = await thunkAPI
                .dispatch(getUserDataByIdQuery(userId))
                .unwrap();

            return response;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant init auth data!');
        }
    },
);

export default initAuthData;
