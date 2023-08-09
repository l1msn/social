import React, {JSX, memo} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import {useTranslation} from 'react-i18next';
import {AlignText, Text, ThemeText} from '@/shared/ui/Text';
import {Input} from '@/shared/ui/Input';
import {IProfile} from '../../model/types/IProfile';
import Loader from '@/widgets/Loader';
import Avatar from '@/widgets/Avatar';
import {Currency, CurrencySelect} from '@/entities/Currency';
import {Country, CountrySelect} from '@/entities/Country';
import {HStack, VStack} from '@/widgets/Stack';

interface IProfileCardProps {
    className?: string,
    data?: IProfile,
    isLoading?: boolean,
    error?: string,
    onChangeFirstName?: (value?: string) => void,
    onChangeLastName?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency: (value?: Currency) => void,
    onChangeCountry: (value?: Country) => void,
    readonly?: boolean;
}

const ProfileCard: React.FC<IProfileCardProps> = memo((props: IProfileCardProps): JSX.Element => {
    const {className,
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
    const {t} = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack justify={'center'} max className={classNames(cls.Profile, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify={'center'} max className={classNames(cls.Profile, {}, [className, cls.error])}>
                <Text
                    align={AlignText.CENTER}
                    theme={ThemeText.ERROR}
                    title={t('Error on loading profile page')}
                    text={error}
                />
            </HStack>
        );
    }


    return (
        <VStack gap={'8'} max className={classNames(cls.Profile, {[cls.editing]: !readonly}, [className])}>
            <HStack justify={'center'} max className={cls.avatarWrapper}>
                {data?.avatar && <Avatar src={data?.avatar} size={100} alt=""/>}
            </HStack>
            <Input
                readonly={readonly} onChange={onChangeFirstName}
                value={data?.first} placeholder={t('Firstname')}
                className={cls.input} data-testid={'ProfileCard.Firstname'}
            />
            <Input readonly={readonly} onChange={onChangeLastName}
                value={data?.lastname} placeholder={t('Lastname')}
                className={cls.input} data-testid={'ProfileCard.Lastname'}
            />
            <Input readonly={readonly} onChange={onChangeUsername}
                value={data?.username} placeholder={t('Username')}
                className={cls.input} data-testid={'ProfileCard.Username'}
            />
            <Input type={'url'} readonly={readonly}
                onChange={onChangeAvatar} value={data?.avatar}
                placeholder={t('Avatar')} className={cls.input}
                data-testid={'ProfileCard.Avatar'}
            />
            <Input
                onKeyPress={(e) => !/[0-9]/.test(e.key) &&
                    e.preventDefault()} readonly={readonly} onChange={onChangeAge}
                value={data?.age} placeholder={t('Age')} className={cls.input}
                data-testid={'ProfileCard.Age'}
            />
            <Input readonly={readonly} onChange={onChangeCity}
                value={data?.city} placeholder={t('City')}
                className={cls.input} data-testid={'ProfileCard.City'}
            />
            <CurrencySelect readonly={readonly} className={cls.input}
                value={data?.currency} onChange={onChangeCurrency}
                data-testid={'ProfileCard.Currency'}
            />
            <CountrySelect readonly={readonly} className={cls.input}
                value={data?.country} onChange={onChangeCountry}
                data-testid={'ProfileCard.Country'}
            />
        </VStack>
    );
});

export default ProfileCard;


