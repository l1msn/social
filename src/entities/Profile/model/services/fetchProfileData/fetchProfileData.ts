import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {IProfile} from '../../types/IProfile';


const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>('profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IProfile>('/profile');

            if (!response.data) {
                throw new Error('No data!');
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Cant get a data!');
        }
    });

export default fetchProfileData;
