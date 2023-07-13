import getProfileData from './model/selectors/getProfileData/getProfileData';
import fetchProfileData from './model/services/fetchProfileData/fetchProfileData';
import {profileSlice} from './model/slice/profileSlice';
import {IProfileSchema} from './model/types/IProfile';
import ProfileCard from './ui/ProfileCard/ProfileCard';

export {IProfileSchema, profileSlice, getProfileData, fetchProfileData, ProfileCard};
