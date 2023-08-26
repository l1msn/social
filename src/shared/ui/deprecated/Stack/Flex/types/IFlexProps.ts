import React from 'react';
import FlexJustify from '../consts/FlexJustify';
import FlexAlign from '../consts/FlexAlign';
import FlexDirection from '../consts/FlexDirection';
import FlexGap from '../consts/FlexGap';

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
}

export default IFlexProps;
