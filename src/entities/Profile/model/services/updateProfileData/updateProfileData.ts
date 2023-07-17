import {createAsyncThunk} from '@reduxjs/toolkit';
import {IThunkConfig} from 'app/providers/StoreProvider';
import {IProfile, ValidateProfileError} from '../../types/IProfile';
import getProfileForm from '../../selectors/getProfileForm/getProfileForm';
import validateProfileData from '../validateProfileData/validateProfileData';


const updateProfileData = createAsyncThunk <IProfile,
    void,
    IThunkConfig< ValidateProfileError[] | string>
>('profile/updateProfileData',
    async (_, thunkAPI) => {
        const formData = getProfileForm(thunkAPI.getState());
        try {
            const errors = validateProfileData(formData);

            if (errors.length) {
                console.log(errors);
                return thunkAPI.rejectWithValue(errors);
            }

            const response = await thunkAPI.extra.api.put<IProfile>('/profile', formData);

            if (!response.data) {
                throw new Error('No update!');
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    });

export default updateProfileData;
