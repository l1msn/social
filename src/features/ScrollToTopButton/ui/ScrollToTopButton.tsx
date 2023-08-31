import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import Icon from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/redesigned/circle-up.svg';

interface IScrollToTopButtonProps {
    className?: string;
}

const ScrollToTopButton: React.FC<IScrollToTopButtonProps> = ({
    className,
}: IScrollToTopButtonProps): JSX.Element => {
    const onClickToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Icon
            Svg={CircleIcon}
            onClick={onClickToTop}
            width={32}
            height={32}
            clickable
            className={classNames('', {}, [className])}
        />
    );
};

export default ScrollToTopButton;
