import UserRole from '../types/UserRole';
import FeatureFlags from '@/shared/types/featureFlags';
import IJsonSettings from './IJsonSettings';

interface IUser {
    id: string | number;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: IJsonSettings;
}

interface IUserScheme {
    authData?: IUser;
    init: boolean;
}

export type { IUser, IUserScheme };
