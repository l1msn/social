import UserRole from '../types/UserRole';
import FeatureFlags from '@/shared/types/featureFlags';

interface IUser {
    id: string | number;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

interface IUserScheme {
    authData?: IUser;
    init: boolean;
}

export type { IUser, IUserScheme };
