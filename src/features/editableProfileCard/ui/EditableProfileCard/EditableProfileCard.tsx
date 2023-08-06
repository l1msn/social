import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import React, {memo, useCallback} from 'react';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country';
import {Text, ThemeText} from 'shared/ui/Text';
import getProfileForm from '../../model/selectors/getProfileForm/getProfileForm';
import getProfileIsLoading from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import getProfileError from '../../model/selectors/getProfileError/getProfileError';
import getProfileValidateError from '../../model/selectors/getProfileValidateError/getProfileValidateError';
import getProfileReadonly from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {ValidateProfileError} from '../../model/types/editableProfileCardSchema';
import fetchProfileData from '../../model/services/fetchProfileData/fetchProfileData';
import {profileActions, profileReducer} from '../../model/slice/profileSlice';
import {ProfileCard} from 'entities/Profile';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';
import {VStack} from 'widgets/Stack';

interface IEditableProfileCardProps {
    className?: string,
    id: string | number;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const EditableProfileCard: React.FC<IEditableProfileCardProps> = memo(({className, id}: IEditableProfileCardProps) => {
    const {t} = useTranslation('profile');

    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateError);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server from error!'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country of user!'),
        [ValidateProfileError.NO_DATA]: t('No data from server!'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data of user!'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age of user!'),
    };

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            first: value || '',
        }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value || '',
        }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value || 0),
        }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            city: value || '',
        }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            username: value || '',
        }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value || '',
        }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({
            currency: value,
        }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfile({
            country: value,
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount>
            <VStack gap={'8'} max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors && validateErrors.map((error: ValidateProfileError) => (
                    <Text
                        key={error}
                        theme={ThemeText.ERROR}
                        text={validateErrorTranslates[error]}
                        data-testid={'EditableProfileCard.Error'}
                    />
                ))}
                <ProfileCard
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    isLoading={isLoading}
                    error={error}
                    data={formData}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});

export default EditableProfileCard;
