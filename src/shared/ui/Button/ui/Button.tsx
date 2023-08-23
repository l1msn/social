import React, { memo, type ButtonHTMLAttributes, type JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import ThemeButton from '../consts/ThemeButton';
import SizeButton from '../consts/SizeButton';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
    disabled?: boolean;
    children?: React.ReactNode;
    fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = memo(
    (props: IButtonProps): JSX.Element => {
        const {
            className,
            disabled,
            size = SizeButton.L,
            children,
            square,
            fullWidth,
            theme = ThemeButton.WITHLINE,
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
                    [className, cls[theme], cls[size]],
                )}
            >
                {children}
            </button>
        );
    },
);

export default Button;
