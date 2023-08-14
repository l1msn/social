import {IStateSchema} from '@/app/providers/StoreProvider';
import {IProfile} from '@/entities/Profile';
import {ValidateProfileError} from '../types/editableProfileCardSchema';

class ProfileSelectors {
    static getProfileAvatar = (state: IStateSchema) => state?.profile?.data?.avatar || '';
    static getProfileData = (state: IStateSchema) => state?.profile?.data || {} as IProfile;
    static getProfileError = (state: IStateSchema) => state?.profile?.error || '';
    static getProfileForm = (state: IStateSchema) => state?.profile?.form || {} as IProfile;
    static getProfileIsLoading = (state: IStateSchema) => state?.profile?.isLoading || false;
    static getProfileReadonly = (state: IStateSchema) => state?.profile?.readonly || false;
    static getProfileValidateError = (state: IStateSchema) => state?.profile?.validateError || [] as ValidateProfileError[];
}

export default ProfileSelectors;
