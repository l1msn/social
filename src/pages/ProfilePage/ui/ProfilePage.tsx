import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {profileReducer} from 'entities/Profile/model/slice/profileSlice';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilePageProps {
    className?: string
}

const ProfilePage: React.FC<IProfilePageProps> = ({className}: IProfilePageProps): JSX.Element => {
    const {t} = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;


