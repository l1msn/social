import React, {JSX, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';
import {HStack} from 'widgets/Stack';
import {Text} from 'shared/ui/Text';
import Button from 'shared/ui/Button';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import getProfileReadonly from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import getProfileData from '../../model/selectors/getProfileData/getProfileData';
import {profileActions} from '../../model/slice/profileSlice';
import updateProfileData from '../../model/services/updateProfileData/updateProfileData';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface IEditableProfileCardHeaderProps {
    className?: string
}

const EditableProfileCardHeader: React.FC<IEditableProfileCardHeaderProps> = ({className}: IEditableProfileCardHeaderProps): JSX.Element => {
    const {t} = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit: boolean = authData?.id == profileData.id;

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
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Text title={t('Profile')}/>
            {canEdit && (
                <>
                    {readonly ? (
                        <Button theme={ThemeButton.WITHLINE} onClick={onEdit}>
                            {t('Edit')}
                        </Button>
                    ) : (
                        <HStack gap={'8'}>
                            <Button theme={ThemeButton.WITHLINE_RED} onClick={onCancelEdit}>
                                {t('Cancel')}
                            </Button>
                            <Button theme={ThemeButton.WITHLINE} onClick={onSave}>
                                {t('Save')}
                            </Button>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    );
};

export default EditableProfileCardHeader;

