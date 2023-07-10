import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import ILoginSchema from '../../model/types/ILoginSchema';
import {IUser, userActions} from 'entities/User';
import USER_LOCALSTORAGE_KEY from 'shared/consts/localStorage';

type loginByUsernameProps = Omit<ILoginSchema, 'isLoading' | 'error'>

const loginByUsername = createAsyncThunk<IUser, loginByUsernameProps>('login/loginByUsername',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', userData);
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
