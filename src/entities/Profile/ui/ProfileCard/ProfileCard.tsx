import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import getProfileData from '../../model/selectors/getProfileData/getProfileData';
import getProfileIsLoading from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import getProfileError from '../../model/selectors/getProfileError/getProfileError';
import {Text} from 'shared/ui/Text';
import Button from 'shared/ui/Button';
import ThemeButton from '../../../../shared/ui/Button/consts/ThemeButton';
import {Input} from 'shared/ui/Input';

interface IProfileCardProps {
    className?: string
}

const ProfileCard: React.FC<IProfileCardProps> = ({className}: IProfileCardProps): JSX.Element => {
    const {t} = useTranslation('profile');
    const userData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileError);
    const error = useSelector(getProfileIsLoading);
    console.log(userData);

    return (
        <div className={classNames(cls.Profile, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')}/>
                <Button className={cls.editBtn} theme={ThemeButton.WITHLINE}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={userData?.first} placeholder={t('Firstname', ': ')} className={cls.input} />
                <Input value={userData?.lastname} placeholder={t('Lastname', ': ')} className={cls.input}/>
            </div>
        </div>
    );
};

export default ProfileCard;


