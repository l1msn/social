import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import {Select} from 'shared/ui/Select';
import Currency from '../model/types/currency';
import {useTranslation} from 'react-i18next';

interface ICurrencySelectProps {
    className?: string,
    value?: Currency,
    onChange?: (value: Currency) => void,
    readonly?: boolean;
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
];

const CurrencySelect: React.FC<ICurrencySelectProps> = memo((props: ICurrencySelectProps): JSX.Element => {
    const {className, value, onChange, readonly} = props;

    const {t} = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select className={classNames('', {}, [className])}
            label={t('Currency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

export default CurrencySelect;


