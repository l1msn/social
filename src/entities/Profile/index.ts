import getProfileData from './model/selectors/getProfileData/getProfileData';
import getProfileError from './model/selectors/getProfileError/getProfileError';
import getProfileForm from './model/selectors/getProfileForm/getProfileForm';
import getProfileIsLoading from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import getProfileReadonly from './model/selectors/getProfileReadonly/getProfileReadonly';
import fetchProfileData from './model/services/fetchProfileData/fetchProfileData';
import updateProfileData from './model/services/updateProfileData/updateProfileData';
import {profileActions, profileReducer} from './model/slice/profileSlice';
import {IProfileSchema} from './model/types/IProfile';
import ProfileCard from './ui/ProfileCard/ProfileCard';

export {
    IProfileSchema,
    profileActions,
    profileReducer,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    fetchProfileData,
    ProfileCard,
    getProfileReadonly,
    updateProfileData,
};
