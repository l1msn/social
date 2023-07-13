import React, {JSX, useEffect} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {profileReducer} from 'entities/Profile/model/slice/profileSlice';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {fetchProfileData, ProfileCard} from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilePageProps {
    className?: string
}

const ProfilePage: React.FC<IProfilePageProps> = ({className}: IProfilePageProps): JSX.Element => {
    const {t} = useTranslation('profile');

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;


