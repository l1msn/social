import rtkApi from '@/shared/api/rtkApi';
import { IUser } from '..';
import IJsonSettings from '../model/types/IJsonSettings';

interface ISetJsonSettings {
    userId: string;
    jsonSettings: IJsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<IUser, ISetJsonSettings>({
            query: ({ userId, jsonSettings }) => ({
                url: '/users/' + userId,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: build.query<IUser, string>({
            query: (userId) => ({
                url: '/users/' + userId,
                method: 'GET',
            }),
        }),
    }),
});

const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;

export { setJsonSettingsMutation, getUserDataByIdQuery };
