import getProfileData from './model/selectors/getProfileData/getProfileData';
import getProfileReadonly from './model/selectors/getProfileReadonly/getProfileReadonly';
import updateProfileData from './model/services/updateProfileData/updateProfileData';
import {profileActions, profileReducer} from './model/slice/profileSlice';
import {IProfileSchema, ValidateProfileError} from './model/types/editableProfileCardSchema';
import EditableProfileCard from './ui/EditableProfileCard/EditableProfileCard';


export {
    EditableProfileCard, getProfileReadonly,
    getProfileData, updateProfileData,
    profileActions, profileReducer,
    ValidateProfileError,
};

export type {IProfileSchema};
