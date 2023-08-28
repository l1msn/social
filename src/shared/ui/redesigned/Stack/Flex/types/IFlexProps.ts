import React from 'react';
import FlexJustify from '../consts/FlexJustify';
import FlexAlign from '../consts/FlexAlign';
import FlexDirection from '../consts/FlexDirection';
import FlexGap from '../consts/FlexGap';
import FlexWrap from '../consts/FlexWrap';

type DivProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

interface IFlexProps extends DivProps {
    className?: string;
    children: React.ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: FlexWrap;
}

export default IFlexProps;
