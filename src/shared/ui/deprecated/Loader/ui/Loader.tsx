import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface ILoaderProps {
    className?: string;
}

/**
 * Устаревший\deprecated UI component, используй новый из папки redesigned
 * @deprecated
 */
const Loader: React.FC<ILoaderProps> = memo(
    ({ className }: ILoaderProps): JSX.Element => {
        return (
            <div className={classNames('lds-ellipsis', {}, [className])}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    },
);

export default Loader;
