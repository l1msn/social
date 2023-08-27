import React, { HTMLAttributes, JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import CardVariant from '../consts/CardVariant';
import cls from './Card.module.scss';
import CardPadding from '../consts/CardPadding';
import CardBorder from '../consts/CardBorder';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

const Card: React.FC<ICardProps> = memo((props: ICardProps): JSX.Element => {
    const {
        className,
        children,
        max,
        padding = '8',
        variant = 'normal',
        border = 'normal',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            {...otherProps}
            className={classNames(cls.card, { [cls.max]: max }, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[border],
            ])}
        >
            {children}
        </div>
    );
});

export default Card;
