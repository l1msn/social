import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ScrollToolbar.module.scss';
import ScrollToTopButton from '@/features/ScrollToTopButton';

interface IScrollToolbarProps {
    className?: string;
}

const ScrollToolbar: React.FC<IScrollToolbarProps> = ({
    className,
}: IScrollToolbarProps): JSX.Element => {
    return (
        <VStack
            justify={'center'}
            align={'center'}
            max
            className={classNames(cls.scrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
};

export default ScrollToolbar;
