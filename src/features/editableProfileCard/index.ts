import getProfileData from './model/selectors/getProfileData/getProfileData';
import getProfileReadonly from './model/selectors/getProfileReadonly/getProfileReadonly';
import updateProfileData from './model/services/updateProfileData/updateProfileData';
import {profileActions} from './model/slice/profileSlice';
import {IProfileSchema} from './model/types/editableProfileCardSchema';
import EditableProfileCard from './ui/EditableProfileCard/EditableProfileCard';


export {
    EditableProfileCard, getProfileReadonly,
    getProfileData, updateProfileData,
    profileActions,
};

export type {IProfileSchema};