import React, { memo, type ButtonHTMLAttributes, type JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import ButtonVariant from '../consts/ButtonVariant';
import ButtonSize from '../consts/ButtonSize';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: React.ReactNode;
    fullWidth?: boolean;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = memo(
    (props: IButtonProps): JSX.Element => {
        const {
            className,
            disabled,
            children,
            square,
            fullWidth,
            addonLeft,
            addonRight,
            size = 'm',
            variant = 'clear',
            ...otherProps
        } = props;

        return (
            <button
                disabled={disabled}
                {...otherProps}
                className={classNames(
                    cls.Button,
                    {
                        [cls.square]: square,
                        [cls.disabled]: disabled,
                        [cls.fullWidth]: fullWidth,
                    },
                    [className, cls[variant], cls[size]],
                )}
            >
                {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
                {children}
                {addonRight && (
                    <div className={cls.addonRight}>{addonRight}</div>
                )}
            </button>
        );
    },
);

export default Button;
