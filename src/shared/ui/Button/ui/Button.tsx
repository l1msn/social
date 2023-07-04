import React, {type ButtonHTMLAttributes, type JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import type ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import SizeButton from 'shared/ui/Button/consts/SizeButton';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    const {className, size, children, square, theme, ...otherProps} = props;

    return (
        <button {...otherProps} className={classNames(cls.Button, {[cls.square]: square}, [className, cls[theme], cls[size]])}>
            {children}
        </button>
    );
};

export default Button;
