import React, {type ButtonHTMLAttributes, type JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import type ThemeButton from 'shared/ui/Button/consts/ThemeButton';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    const {className, children, theme, ...otherProps} = props;

    return (
        <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};

export default Button;
