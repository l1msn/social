import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface IOverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Устаревший\deprecated UI component, используй новый из папки redesigned
 * @deprecated
 */
const Overlay: React.FC<IOverlayProps> = ({
    className,
    onClick,
}: IOverlayProps): JSX.Element => {
    return (
        <div
            onClick={onClick}
            className={classNames(cls.overlay, {}, [className])}
        />
    );
};

export default Overlay;
