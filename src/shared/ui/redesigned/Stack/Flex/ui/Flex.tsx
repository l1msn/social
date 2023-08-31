import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import FlexAlign from '../consts/FlexAlign';
import FlexDirection from '../consts/FlexDirection';
import FlexJustify from '../consts/FlexJustify';
import cls from './Flex.module.scss';
import FlexGap from '../consts/FlexGap';
import IFlexProps from '../types/IFlexProps';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    center: cls.justifyCenter,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

const Flex: React.FC<IFlexProps> = (props: IFlexProps): JSX.Element => {
    const {
        className,
        children,
        gap,
        max,
        wrap = 'nowrap',
        justify = 'start',
        align = 'center',
        direction = 'row',
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        cls[wrap],
    ];

    const mods: Record<string, boolean | undefined> = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};

export default Flex;
