import React, {JSX} from 'react';
import {createPortal} from 'react-dom';

interface IPortalProps {
    children?: React.ReactNode,
    element?: HTMLElement;
}

const Portal: React.FC<IPortalProps> = (props: IPortalProps): JSX.Element => {
    const {children, element= document.body} = props;
    return createPortal(children, element);
};

export default Portal;


