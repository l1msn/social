import React, { JSX, memo, useCallback } from 'react';
import Currency from '../model/types/currency';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/deprecated/Popups';

interface ICurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect: React.FC<ICurrencySelectProps> = memo(
    (props: ICurrencySelectProps): JSX.Element => {
        const { className, value, onChange, readonly } = props;

        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <ListBox
                className={className}
                value={value}
                readonly={readonly}
                items={options}
                onChange={onChangeHandler}
                defaultValue={t('Currency')}
                label={t('Currency')}
                direction={'top right'}
            />
        );
    },
);

export default CurrencySelect;
