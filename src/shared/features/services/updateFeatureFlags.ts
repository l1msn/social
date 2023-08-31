import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import IFeatureFlags from '@/shared/types/IFeatureFlags';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures';

interface IUpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<IFeatureFlags>;
}

const updateFeatureFlags = createAsyncThunk<
    void,
    IUpdateFeatureFlagsOptions,
    IThunkConfig<string>
>('feature/updateFeatureFlags', async ({ userId, newFeatures }, thunkAPI) => {
    try {
        if (!userId) {
            return thunkAPI.rejectWithValue('No id!');
        }

        await thunkAPI.dispatch(
            updateFeatureFlagsMutation({
                userId: userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures,
                },
            }),
        );
        setFeatureFlags({
            ...getAllFeatureFlags(),
            ...newFeatures,
        });

        window.location.reload();
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue('Cant get a article by id!');
    }
});

export default updateFeatureFlags;
