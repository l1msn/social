import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import {
    AlignText,
    Text as DeprecatedText,
    ThemeText,
} from '@/shared/ui/deprecated/Text';
import { Input as DeprecatedInput } from '@/shared/ui/deprecated/Input';
import { IProfile } from '../../model/types/IProfile';
import Loader from '@/shared/ui/deprecated/Loader';
import { default as DeprecatedAvatar } from '@/shared/ui/deprecated/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import Avatar from '@/shared/ui/redesigned/Avatar';
import Skeleton from '@/shared/ui/redesigned/Skeleton';

interface IProfileCardProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency: (value?: Currency) => void;
    onChangeCountry: (value?: Country) => void;
    readonly?: boolean;
}

const ProfileCard: React.FC<IProfileCardProps> = memo(
    (props: IProfileCardProps): JSX.Element => {
        const {
            className,
            data,
            error,
            isLoading,
            onChangeLastName,
            onChangeFirstName,
            onChangeAge,
            onChangeCity,
            onChangeAvatar,
            onChangeUsername,
            onChangeCurrency,
            onChangeCountry,
            readonly,
        } = props;
        const { t } = useTranslation('profile');

        const DeprecatedLoaderProfileCard = (
            <HStack
                justify={'center'}
                max
                className={classNames(cls.Profile, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </HStack>
        );

        const RedesignedLoaderProfileCard = (
            <Card padding={'24'} max>
                <VStack gap={'32'}>
                    <HStack justify={'center'} max>
                        <Skeleton
                            borderRadius={'100%'}
                            width={128}
                            height={128}
                        />
                    </HStack>
                    <HStack gap={'32'} max>
                        <VStack gap={'16'} max>
                            <Skeleton
                                borderRadius={'38px'}
                                width={'100%'}
                                height={38}
                            />
                            <Skeleton
                                borderRadius={'38px'}
                                width={'100%'}
                                height={38}
                            />
                            <Skeleton
                                borderRadius={'38px'}
                                width={'100%'}
                                height={38}
                            />
                            <Skeleton
                                borderRadius={'38px'}
                                width={'100%'}
                                height={38}
                            />
                        </VStack>
                        <VStack gap={'16'} max>
                            <Skeleton
                                borderRadius={'38px'}
                                width={'100%'}
                                height={38}
                            />
                            <Skeleton
                                borderRadius={'38px'}
                                width={'100%'}
                                height={38}
                            />
                            <Skeleton
                                borderRadius={'38px'}
                                width={'100%'}
                                height={38}
                            />
                            <Skeleton
                                borderRadius={'38px'}
                                width={'100%'}
                                height={38}
                            />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );

        if (isLoading) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedLoaderProfileCard}
                    off={DeprecatedLoaderProfileCard}
                />
            );
        }

        if (error) {
            return (
                <HStack
                    justify={'center'}
                    max
                    className={classNames(cls.Profile, {}, [
                        className,
                        cls.error,
                    ])}
                >
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={
                            <Text
                                align={AlignText.CENTER}
                                variant={'error'}
                                title={t('Error on loading profile page')}
                                text={error}
                            />
                        }
                        off={
                            <DeprecatedText
                                align={AlignText.CENTER}
                                theme={ThemeText.ERROR}
                                title={t('Error on loading profile page')}
                                text={error}
                            />
                        }
                    />
                </HStack>
            );
        }

        const DeprecatedProfileCard = (
            <VStack
                gap={'8'}
                max
                className={classNames(
                    cls.Profile,
                    { [cls.editing]: !readonly },
                    [className],
                )}
            >
                <HStack justify={'center'} max className={cls.avatarWrapper}>
                    {data?.avatar && (
                        <DeprecatedAvatar
                            src={data?.avatar}
                            size={100}
                            alt=""
                        />
                    )}
                </HStack>
                <DeprecatedInput
                    readonly={readonly}
                    onChange={onChangeFirstName}
                    value={data?.first}
                    placeholder={t('Firstname')}
                    className={cls.input}
                    data-testid={'ProfileCard.Firstname'}
                />
                <DeprecatedInput
                    readonly={readonly}
                    onChange={onChangeLastName}
                    value={data?.lastname}
                    placeholder={t('Lastname')}
                    className={cls.input}
                    data-testid={'ProfileCard.Lastname'}
                />
                <DeprecatedInput
                    readonly={readonly}
                    onChange={onChangeUsername}
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    data-testid={'ProfileCard.Username'}
                />
                <DeprecatedInput
                    type={'url'}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    className={cls.input}
                    data-testid={'ProfileCard.Avatar'}
                />
                <DeprecatedInput
                    onKeyPress={(keyboardEvent) =>
                        !/[0-9]/.test(keyboardEvent.key) &&
                        keyboardEvent.preventDefault()
                    }
                    readonly={readonly}
                    onChange={onChangeAge}
                    value={data?.age}
                    placeholder={t('Age')}
                    className={cls.input}
                    data-testid={'ProfileCard.Age'}
                />
                <DeprecatedInput
                    readonly={readonly}
                    onChange={onChangeCity}
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    data-testid={'ProfileCard.City'}
                />
                <CurrencySelect
                    readonly={readonly}
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    data-testid={'ProfileCard.Currency'}
                />
                <CountrySelect
                    readonly={readonly}
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    data-testid={'ProfileCard.Country'}
                />
            </VStack>
        );

        const RedesignedProfileCard = (
            <Card
                padding={'24'}
                max
                className={classNames(cls.ProfileRedesigned, {}, [className])}
            >
                <HStack
                    gap={'16'}
                    justify={'center'}
                    max
                    className={cls.avatarWrapper}
                >
                    {data?.avatar && (
                        <Avatar src={data?.avatar} size={128} alt="" />
                    )}
                </HStack>
                <HStack className={cls.dataProfile} gap={'24'} max>
                    <VStack gap={'16'} max>
                        <Input
                            readonly={readonly}
                            onChange={onChangeFirstName}
                            value={data?.first}
                            label={t('Firstname')}
                            className={cls.input}
                            data-testid={'ProfileCard.Firstname'}
                        />
                        <Input
                            readonly={readonly}
                            onChange={onChangeLastName}
                            value={data?.lastname}
                            label={t('Lastname')}
                            className={cls.input}
                            data-testid={'ProfileCard.Lastname'}
                        />
                        <Input
                            readonly={readonly}
                            onChange={onChangeUsername}
                            value={data?.username}
                            label={t('Username')}
                            className={cls.input}
                            data-testid={'ProfileCard.Username'}
                        />
                        <Input
                            type={'url'}
                            readonly={readonly}
                            onChange={onChangeAvatar}
                            value={data?.avatar}
                            label={t('Avatar')}
                            className={cls.input}
                            data-testid={'ProfileCard.Avatar'}
                        />
                    </VStack>
                    <VStack className={cls.dataWithListBoxes} gap={'16'} max>
                        <Input
                            onKeyPress={(keyboardEvent) =>
                                !/[0-9]/.test(keyboardEvent.key) &&
                                keyboardEvent.preventDefault()
                            }
                            readonly={readonly}
                            onChange={onChangeAge}
                            value={data?.age}
                            label={t('Age')}
                            className={cls.input}
                            data-testid={'ProfileCard.Age'}
                        />
                        <Input
                            readonly={readonly}
                            onChange={onChangeCity}
                            value={data?.city}
                            label={t('City')}
                            className={cls.input}
                            data-testid={'ProfileCard.City'}
                        />
                        <CurrencySelect
                            readonly={readonly}
                            className={cls.input}
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            data-testid={'ProfileCard.Currency'}
                        />
                        <CountrySelect
                            readonly={readonly}
                            className={cls.input}
                            value={data?.country}
                            onChange={onChangeCountry}
                            data-testid={'ProfileCard.Country'}
                        />
                    </VStack>
                </HStack>
            </Card>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedProfileCard}
                off={DeprecatedProfileCard}
            />
        );
    },
);

export default ProfileCard;
