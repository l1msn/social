import ProfileSelectors from './model/selectors/ProfileSelectors';
import updateProfileData from './model/services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import {
    IProfileSchema,
    ValidateProfileError,
} from './model/types/editableProfileCardSchema';
import EditableProfileCard from './ui/EditableProfileCard/EditableProfileCard';

export {
    EditableProfileCard,
    ProfileSelectors,
    profileReducer,
    updateProfileData,
    profileActions,
    ValidateProfileError,
};

export type { IProfileSchema };
