import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import IJsonSettings from '../types/IJsonSettings';
import UserSelectors from '../selectors/UserSelectors';
import JsonSelectors from '../selectors/JsonSelectors';
import { setJsonSettingsMutation } from '../../api/userApi';

const saveJsonSettings = createAsyncThunk<
    IJsonSettings,
    IJsonSettings,
    IThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings: IJsonSettings, thunkAPI) => {
    try {
        const userData = UserSelectors.getUserAuthData(thunkAPI.getState());

        const { getJsonSettings } = JsonSelectors.jsonSettings();

        const currentSettings = getJsonSettings(thunkAPI.getState());

        if (!userData) {
            return thunkAPI.rejectWithValue('No auth data');
        }

        const response = await thunkAPI
            .dispatch(
                setJsonSettingsMutation({
                    userId: userData.id as string,
                    jsonSettings: {
                        ...currentSettings,
                        ...newJsonSettings,
                    },
                }),
            )
            .unwrap();

        if (!response.jsonSettings) {
            return thunkAPI.rejectWithValue('No rejectWithValue');
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Cant save json settings!');
    }
});

export default saveJsonSettings;
