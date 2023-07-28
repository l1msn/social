import React, {HTMLAttributes, JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string,
    children?: React.ReactNode;
}

const Card: React.FC<ICardProps> = memo(({className, children, ...otherProps}: ICardProps): JSX.Element => {
    return (
        <div {...otherProps} className={classNames(cls.card, {}, [className])}>
            {children}
        </div>
    );
});

export default Card;


