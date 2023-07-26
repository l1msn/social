import React, {JSX, useCallback, useEffect} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {profileActions, profileReducer} from 'entities/Profile/model/slice/profileSlice';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchProfileData,
    getProfileForm,
    getProfileReadonly,
    getProfileValidateError,
    ProfileCard, ValidateProfileError,
} from 'entities/Profile';
import {useSelector} from 'react-redux';
import getProfileError from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import getProfileIsLoading from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country';
import {Text, ThemeText} from 'shared/ui/Text';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {useParams} from 'react-router-dom';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilePageProps {
    className?: string
}

const ProfilePage: React.FC<IProfilePageProps> = ({className}: IProfilePageProps): JSX.Element => {
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

    const {id} = useParams<string>();

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
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors && validateErrors.map((error) => (
                    <Text
                        key={error}
                        theme={ThemeText.ERROR}
                        text={validateErrorTranslates[error]}
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
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;


