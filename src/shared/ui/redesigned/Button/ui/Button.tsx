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
}

const Button: React.FC<IButtonProps> = memo(
    (props: IButtonProps): JSX.Element => {
        const {
            className,
            disabled,
            size = 'm',
            children,
            square,
            fullWidth,
            variant = 'outline',
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
                {children}
            </button>
        );
    },
);

export default Button;
