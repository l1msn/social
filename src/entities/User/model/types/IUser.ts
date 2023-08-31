import UserRole from '../types/UserRole';
import IFeatureFlags from '@/shared/types/IFeatureFlags';
import IJsonSettings from './IJsonSettings';

interface IUser {
    id: string | number;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: IFeatureFlags;
    jsonSettings?: IJsonSettings;
}

interface IUserScheme {
    authData?: IUser;
    init: boolean;
}

export type { IUser, IUserScheme };
