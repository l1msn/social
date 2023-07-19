import {createAsyncThunk} from '@reduxjs/toolkit';
import ILoginSchema from '../../model/types/ILoginSchema';
import {IUser, userActions} from 'entities/User';
import USER_LOCALSTORAGE_KEY from 'shared/consts/localStorage';
import {IThunkConfig} from 'app/providers/StoreProvider';

type loginByUsernameProps = Omit<ILoginSchema, 'isLoading' | 'error'>

const loginByUsername = createAsyncThunk<IUser, loginByUsernameProps, IThunkConfig<string>>('login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<IUser>('/login', authData);


            if (!response.data) {
                throw new Error('No data!');
            }


            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Invalid username or password');
        }
    });

export default loginByUsername;
