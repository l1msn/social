import rtkApi from '@/shared/api/rtkApi';
import INotification from '../model/types/INotification';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<INotification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

const useNotifications = notificationsApi.useGetNotificationsQuery;

export default useNotifications;
