import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { UserSelectors } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import Button from '@/shared/ui/Button';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import ProfileSelectors from '../../model/selectors/ProfileSelectors';
import { profileActions } from '../../model/slice/profileSlice';
import updateProfileData from '../../model/services/updateProfileData/updateProfileData';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface IEditableProfileCardHeaderProps {
    className?: string;
}

const EditableProfileCardHeader: React.FC<IEditableProfileCardHeaderProps> = ({
    className,
}: IEditableProfileCardHeaderProps): JSX.Element => {
    const { t } = useTranslation('profile');

    const readonly = useSelector(ProfileSelectors.getProfileReadonly);

    const dispatch = useAppDispatch();

    const authData = useSelector(UserSelectors.getUserAuthData);
    const profileData = useSelector(ProfileSelectors.getProfileData);
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
        <HStack
            max
            justify={'between'}
            className={classNames('', {}, [className])}
        >
            <Text title={t('Profile')} />
            {canEdit && (
                <>
                    {readonly ? (
                        <Button
                            theme={ThemeButton.WITHLINE}
                            data-testid={'EditableProfileCardHeader.EditButton'}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <HStack gap={'8'}>
                            <Button
                                theme={ThemeButton.WITHLINE_RED}
                                data-testid={
                                    'EditableProfileCardHeader.CancelButton'
                                }
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                theme={ThemeButton.WITHLINE}
                                data-testid={
                                    'EditableProfileCardHeader.SaveButton'
                                }
                                onClick={onSave}
                            >
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
