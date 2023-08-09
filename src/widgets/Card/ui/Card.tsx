import React, {HTMLAttributes, JSX, memo} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import CardTheme from '../consts/CardTheme';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string,
    children?: React.ReactNode;
    theme?: CardTheme;
}

const Card: React.FC<ICardProps> = memo((props: ICardProps): JSX.Element => {
    const {className, children, theme = CardTheme.NORMAL, ...otherProps} = props;
    return (
        <div {...otherProps} className={classNames(cls.card, {}, [className, cls[theme]])}>
            {children}
        </div>
    );
});

export default Card;


