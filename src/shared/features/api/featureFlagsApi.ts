import rtkApi from '@/shared/api/rtkApi';
import IFeatureFlags from '@/shared/types/IFeatureFlags';

interface IFeatureFlagsApiSettings {
    userId: string;
    features: Partial<IFeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeatureFlags: build.mutation<void, IFeatureFlagsApiSettings>({
            query: ({ userId, features }) => ({
                url: '/users/' + userId,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
});

const updateFeatureFlagsMutation =
    featureFlagsApi.endpoints.updateFeatureFlags.initiate;

export { updateFeatureFlagsMutation };
