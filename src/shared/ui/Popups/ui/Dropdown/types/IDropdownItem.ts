import React from 'react';

interface IDropdownItem {
    disabled?: boolean,
    content?: React.ReactNode,
    onClick?: () => void,
    href?: string;
}

export default IDropdownItem;
