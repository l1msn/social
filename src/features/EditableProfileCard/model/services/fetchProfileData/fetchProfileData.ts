import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IProfile } from '@/entities/Profile';

const fetchProfileData = createAsyncThunk<
    IProfile,
    string | number | undefined,
    IThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<IProfile>(
            '/profile/' + profileId?.toString(),
        );

        if (!profileId) {
            return thunkAPI.rejectWithValue('Cant get a data with that id!');
        }

        if (!response.data) {
            return thunkAPI.rejectWithValue('No data!');
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Cant get a profile data!');
    }
});

export default fetchProfileData;
