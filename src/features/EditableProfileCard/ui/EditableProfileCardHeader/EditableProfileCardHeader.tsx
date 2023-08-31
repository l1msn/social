import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { UserSelectors } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import ProfileSelectors from '../../model/selectors/ProfileSelectors';
import { profileActions } from '../../model/slice/profileSlice';
import updateProfileData from '../../model/services/updateProfileData/updateProfileData';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/features';
import Button from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';

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

    const DeprecatedEditableProfileCardHeader = (
        <HStack
            max
            justify={'between'}
            className={classNames('', {}, [className])}
        >
            <DeprecatedText title={t('Profile')} />
            {canEdit && (
                <>
                    {readonly ? (
                        <DeprecatedButton
                            theme={ThemeButton.WITHLINE}
                            data-testid={'EditableProfileCardHeader.EditButton'}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </DeprecatedButton>
                    ) : (
                        <HStack gap={'8'}>
                            <DeprecatedButton
                                theme={ThemeButton.WITHLINE_RED}
                                data-testid={
                                    'EditableProfileCardHeader.CancelButton'
                                }
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </DeprecatedButton>
                            <DeprecatedButton
                                theme={ThemeButton.WITHLINE}
                                data-testid={
                                    'EditableProfileCardHeader.SaveButton'
                                }
                                onClick={onSave}
                            >
                                {t('Save')}
                            </DeprecatedButton>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    );

    const RedesignedEditableProfileCardHeader = (
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
                            variant={'filled'}
                            data-testid={'EditableProfileCardHeader.EditButton'}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <HStack gap={'8'}>
                            <Button
                                variant={'cancel'}
                                data-testid={
                                    'EditableProfileCardHeader.CancelButton'
                                }
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                variant={'accept'}
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

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedEditableProfileCardHeader}
            off={DeprecatedEditableProfileCardHeader}
        />
    );
};

export default EditableProfileCardHeader;
