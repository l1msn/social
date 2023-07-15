import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import {Text} from 'shared/ui/Text';
import Button from 'shared/ui/Button';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {getProfileReadonly, profileActions, updateProfileData} from 'entities/Profile';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface IProfilePageHeaderProps {
    className?: string
}

const ProfilePageHeader: React.FC<IProfilePageHeaderProps> = memo(({className}: IProfilePageHeaderProps): JSX.Element => {
    const {t} = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')}/>
            {readonly ? (
                <Button className={cls.editBtn} theme={ThemeButton.WITHLINE} onClick={onEdit}>
                    {t('Edit')}
                </Button>
            ) : (
                <>
                    <Button className={cls.editBtn} theme={ThemeButton.WITHLINE_RED} onClick={onCancelEdit}>
                        {t('Cancel')}
                    </Button>
                    <Button className={cls.saveBtn} theme={ThemeButton.WITHLINE} onClick={onSave}>
                        {t('Save')}
                    </Button>
                </>
            )}

        </div>
    );
});

export default ProfilePageHeader;


