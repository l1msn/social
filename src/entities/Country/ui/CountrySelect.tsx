import React, {JSX, memo, useCallback} from 'react';
import Country from '../model/types/country';
import {useTranslation} from 'react-i18next';
import ListBox from 'shared/ui/ListBox';

interface ICountrySelectProps {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void,
    readonly?: boolean;
}

const options = [
    {value: Country.ARMENIA, content: Country.ARMENIA},
    {value: Country.RUSSIA, content: Country.RUSSIA},
    {value: Country.BELARUS, content: Country.BELARUS},
    {value: Country.UKRAINE, content: Country.UKRAINE},
    {value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN},
];

const CountrySelect: React.FC<ICountrySelectProps> = memo((props: ICountrySelectProps): JSX.Element => {
    const {className, value, onChange, readonly} = props;

    const {t} = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            readonly={readonly}
            items={options}
            onChange={onChangeHandler}
            defaultValue={t('Country')}
            label={t('Country')}
            direction={'top right'}
        />
    );
});

export default CountrySelect;


